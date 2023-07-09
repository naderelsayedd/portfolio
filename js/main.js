// navbar and go top button
var header = document.getElementById("header")
var btnTop = document.getElementById("btnTop")

window.onscroll = function(){
    if(scrollY > 200){
        header.classList.add("headerFixed")
        btnTop.style.display = "block"
        btnTop.addEventListener("click" , function(){
            window.scroll({
                top : 0 ,
                behavior: 'smooth'
                
            })
        })
    }else
    {
        header.classList.remove("headerFixed")
        btnTop.style.display = "none"
    }
}



var owl = $('.owl-carousel');
owl.owlCarousel({
    items:1,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true
});
$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[3000])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
})



// images filter

// show all image categories
$("#all").click(function(){
    $(".design").fadeIn(1000);
    $(".brand").fadeIn(1000) ;
    $(".graphic").fadeIn(1000) ;
})

// show brand category only

$("#brand").click(function(){
  $(".brand").fadeIn(1000)
  $(".design").fadeOut(1000)
  $(".graphic").fadeOut(1000)
})


// show graphic category only

$("#graphic").click(function(){
  $(".graphic").fadeIn(1000)
  $(".design").fadeOut(1000),
  $(".brand").fadeOut(1000)
})


// show design category only
$("#design").click(function(){
  $(".design").fadeIn(1000)
  $(".brand").fadeOut(1000),
  $(".graphic").fadeOut(1000)
})