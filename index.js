var count = 0;
var num_hits = document.querySelector( '.hits' );
document.body.onkeyup = function(e) {
  if( e.keyCode == 32 ) {
    count_inc();
  }
}

var count_inc = function() {
  count++;
  Hits();
}

var Hits = function() {
  num_hits.innerHTML = count;
}

var resetHits = function() {
  count = 0;
  Hits();
}