import $ from "jquery"


opning();
function tick(time) {
    return new Promise((resolve) => {
        setTimeout(function () {
            resolve()
        }, time)
    })
}
async function opning() {
  await tick(300);
  $('.text-selector').addClass('move');

}





const swiper = new Swiper(".swiper", {
    loop: true,  
    slidesPerView: 1, 
    spaceBetween: 40, 
    pagination: {
      el: ".swiper-pagination",
      type: "fraction", 
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  