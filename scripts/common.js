$(window).on("load", function(){

});

// top Button
$(document).on("click","#topBtn", function(){
  window.scrollTo({top : 0, behavior: 'smooth'});
});

// design Popup
function notScrollOn(){
    $("body").css({ 
        touchAction: "none",
        overflow: "hidden"
    });
};
function notScrollOff(){
    $("body").css({ 
        touchAction: "auto",
        overflow: ""
    });
}

$(document).on("click","#imgList li", function(){
    let num = $(this).attr("num");
    $("#pop").addClass("on").stop().fadeIn(500);
    if($(this).attr("sub") !== undefined){
        $("#pop .imgBox").html("<img src='images/" + num + "_1.jpg' num='" + num + "'>");
    }else{
        $("#pop .imgBox").html("<img src='images/" + num + ".jpg' num='" + num + "'>");
    }
    notScrollOn();
});

$(document).on("click","#pop .arr", function(){
    let num = $(this).parent().find(".imgBox img").attr("num");
    if($(this).hasClass("next")){
        if(num == "1") num = "29";
        else num = String(parseInt(num) - 1);
    }else{
        if(num == "29") num = "1";
        else num = String(parseInt(num) + 1);
    }
    let src
    if(num === "1" || num === "2" || num === "9" || num == "10" || num == "11" || num == "12" || num == "25"){
        src = "images/" + num + ".jpg";
    }else{
        src = "images/" + num + "_1.jpg";
    }
    $("#pop .popView").stop().animate(
        { opacity: "0.3" }, 200, function(){
            $("#pop .imgBox img").attr("src", src);
            $("#pop .imgBox img").attr("num", num);
            $(this).stop().animate({ opacity: "1" }, 300);
        }
    );
});
$(document).on("click","#pop .close", function(){
    $("#pop").removeClass("on").stop().fadeOut(500);
    notScrollOff();
});
$(document).on("click","#pop .dim", function(){
    $("#pop").removeClass("on").stop().fadeOut(500);
    notScrollOff();
});
$(document).on("keydown", function(e) {
    if(e.key === "ArrowRight") {
        if(!$("#pop").hasClass("on")) return false;
        else $("#pop .next").click();
    }else if (e.key === "ArrowLeft") {
        if(!$("#pop").hasClass("on")) return false;
        else $("#pop .prev").click();
    }
});