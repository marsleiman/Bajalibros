$(document).ready(function(){
$(".owl-carousel").owlCarousel();
});

$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
    loop : true,
    margin: 10,
    dots : true,
    //nav:true,
    responsive : {
      0 : {
        items : 3
      }
    },
    //navText : ["<div class=\"arrow\">\<<\div>","<div class=\"arrow\">\><\div>"]
  });
});
