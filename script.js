$(".start").click(function(){
	$(".start-page").slideUp();
    $(".first").slideDown();
    $(".first").css("background-image", "url('https://www.treehugger.com/thmb/sv0SN7cHRiKduo-lmo-ItkvPC1k=/2121x1193/smart/filters:no_upscale()/GettyImages-521652072-1763e0a890ef4ee58d36c4742c685bae.jpg')");
    $(".one").css("background-color", "#297787");
});

$(".btn1").css("display", "none");

$(".btn1").click(function(){
	$(".first").fadeOut();
    $(".second").fadeIn();
    $(".two").css("background-color", "#297787");
    $(".second").css("background-image", "url('https://s3-eu-west-1.amazonaws.com/yara-links/oyjb.jpg')");
});

$(".btn2").click(function(){
	$(".second").fadeOut();
    $(".last").fadeIn();
    $(".text-container2").css("background-color", "#262a70" );
     $("body").css("background-image", "url('https://media.npr.org/assets/img/2019/07/16/3_elkhorncoral_acropora_palmata_florida_keys_5m_jwporter_custom-e717562516a299ccbe24491810485c657bce00f5.jpg')");
});

$(".btn3").click(function(){
	$(".last").fadeOut();
    $(".end-page").fadeIn();
    $(".end-page").css("background-image", "url('https://images1.miaminewtimes.com/imager/u/745xauto/11221562/fwc-coral-reef.jpg')");
});
   
$(".resources").click(function(){
	$(".res-page").toggle('slow');
});

$(".back").click(function(){
	$(".end-page").fadeOut();
    $(".start-page").fadeIn();
});
  
$(".div1").one("click", function(){
	$(".div1").append("<h3>" + "Temp." + "</h3>");
});
  
$(".div2").one("click", function(){
	$(".div2").append("<h3>" + "Sunlight" + "</h3>");
});
  
$(".div3").one("click", function(){
	$(".div3").append("<h3>" + "Oxygen" + "</h3>");
    $(".btn1").fadeIn();
});
