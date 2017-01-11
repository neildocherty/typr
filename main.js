function typr(target,prefix,speed) {

  const TYPE_RANDOM_MAX = speed*1.5;
  const TYPE_RANDOM_MIN = speed*0.5;

  let string = target.innerText;


  target.innerHTML = '';
  target.classList.remove("typr");

  // target.classList.add('visible');

  if( prefix ) {
  // add '>' element to the target
  let pre = document.createElement('div');
      pre.classList.add('pre');
      pre.innerHTML = prefix+"&nbsp";
  target.appendChild(pre)
  }

  // add text element to the target
  let text = document.createElement('span');
      text.classList.add('text');
  target.appendChild(text)



  // add cursor element to the target
  let cursor = document.createElement('span');
      cursor.innerHTML = '&nbsp';
      cursor.classList.add('cursor');
  target.appendChild(cursor)

  let typeTimeout;

  type();


  function type(){

    if ( string.length === 0 ) {
      cursor.remove();
      // target.classList.remove('typr','visible');
      return;
    }

    text.innerHTML += string[0];

    string = string.slice(1);

    typeTimeout = window.setTimeout(type,(Math.random() * (TYPE_RANDOM_MAX - TYPE_RANDOM_MIN) + TYPE_RANDOM_MIN));

  };

}
