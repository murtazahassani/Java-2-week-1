
 document.body.style.fontFamily = 'Arial, sans-serif';
 document.getElementById('nickname').innerHTML = 'Changiz';
 document.getElementById('favorites').innerHTML = 'Joel Osten, Tony Robbins';
 document.getElementById('hometown').innerHTML = 'Afganistan, Af';
 var items = document.getElementsByTagName('li');
 for (var i = 0; i < items.length; i++) {
    items[i].className = 'listitem';
 }
  
  var myPic = document.createElement('img');
  myPic.src = 'imag/imag-1.jpg';
  document.body.appendChild(myPic);