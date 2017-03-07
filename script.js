var newRGB;
var color;
var flag = 0;

var canvas = $("canvas");
var ctx = canvas[0].getContext("2d");
var lastevent;
var temp = false;

// Selecting color
$(".color_selector").on("click", "li", function(){

  $(this).siblings().removeClass("selected");
  $(this).addClass("selected");
  color = $(this).css("background-color");
  ctx.strokeStyle=color;
});

//Adding new color to Ul

$('input').change(function () { 
    var red = $('#red').val();
    var green = $('#green').val();
    var blue = $('#blue').val();

    newRGB = "rgb(" + red + "," + green +"," + blue + ")";

    $('#addColor').css('background-color', newRGB);

    var width = $("#line_width").val();
    ctx.lineWidth = width;


});

$('#addColor').click(function () { 
    
    var newLi = $('<li></li>');
    newLi.css('background-color', newRGB);
    $('.color_selector ul').append(newLi);

});

$('.arrow img').click(function () {     
    toggle();
});


//Toggling color creator

function toggle() {

    if (flag==0) {
        $('.color_creator').css('display', 'block');
        $('.arrow img').attr('src', './upArrow.png');
        flag = 1;
    }

    else if (flag==1) {
        $('.color_creator').css('display', 'none');
        $('.arrow img').attr('src', './downArrow.png');
        flag = 0;
    }

}

canvas.mousedown(function(e){
  lastevent = e;
  temp = true;

}).mousemove(function(e){
    if(temp) {

        ctx.beginPath();
        ctx.moveTo(lastevent.offsetX, lastevent.offsetY);
        ctx.lineTo(e.offsetX, e.offsetY);
        ctx.stroke(); 
        lastevent = e;
    }
}).mouseup(function() {
    temp = false;
});