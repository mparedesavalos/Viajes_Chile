$(document).ready(function(){

  $("a").click(function(){

    var gato = this.hash
    $("html,body").animate(
      {
        scrolltTop:$(gato).offset().top -40

      },3000

    )

  })

  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
  })



})
