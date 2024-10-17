$("#slider2 .owl-carousel").owlCarousel({
  stagePadding: 50,
  loop: true,
  margin: 10,
  responsive: {
    0: {
      items: 2,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 4,
    },
  },
});
var owl = $(".owl-carousel");
owl.owlCarousel({
  items: 2,
  loop: true,
  margin: 10,
  autoplay: true,
  autoplayTimeout: 2000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 2,
    },
  },
});
$("#slider1.play").on("click", function () {
  owl.trigger("play.owl.autoplay", [1000]);
});
$("#sider1.stop").on("click", function () {
  owl.trigger("stop.owl.autoplay");
});

