$(document).ready(function(){
  
  $('form').on('submit', function(e){
    e.preventDefault();
    var term = $('#gif-input').val();
    console.log(term);
    var apiKey = $('input[type="hidden"]').val();
    console.log(apiKey);
    var giphyUrl = `http://api.giphy.com/v1/gifs/search?q=${term}&api_key=${apiKey}&offset=10`
    console.log(giphyUrl);
  
    $.ajax({
    url: giphyUrl,
    method: "GET",
    success: function(response) {
      console.log(response);
      var gifs = response.data
      gifs.forEach(gif => {
        $('.gif-gallery').append(`<img src='${gif.images.original.url}'>`)
      });
    },
  })
  })})      
