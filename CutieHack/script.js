var id = null;
function myMove() {
  var elem = document.getElementById("obstacle");   
  var pos = 500;
  clearInterval(id);
  id = setInterval(frame, 8);
  function frame() {
    if (pos == 0) {
      clearInterval(id);
    } else {
      pos-=2; 
      elem.style.left = pos + 'px'; 
    }
  }
}