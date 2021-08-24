//EVENTOS CLICK DE LAS REDES
$(".igLink").click(() => window.open("http://www.instagram.com"));
$(".ytLink").click(() => window.open("http://www.youtube.com"));
$(".fbLink").click(() => window.open("http://www.facebook.com"));

//EFECTO DEL MENU RESPONSIVE
$(".responsive-menu-items ul li").click(() => {
  $(".responsive-menu-items").fadeOut();
});
$(".responsive-menu").click(() => {
  if ($(".responsive-menu-items").is(":visible")) {
    $(".responsive-menu-items").fadeOut();
  } else {
    $(".responsive-menu-items").fadeIn();
  }
});