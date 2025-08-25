var i = 0;
var txt = 'Click on add button to add material.';
var speed = 50;

var marks=0;

function navNextstrt()

{
  document.getElementById("canvas_start").style.visibility="hidden";
  document.getElementById("canvas0").style.visibility="visible";

  dronefirstcome()
 
}

 

    function navNext2()

{
  document.getElementById("canvas0").style.visibility="hidden";
  document.getElementById("canvas2").style.visibility="visible";

  setTimeout(function()
  {
    var x= document.getElementById('aud_precautions');
        x.play();
   },1000);

  setTimeout(function()
  {

 $( "#highlighttxt3" ).delay(200).fadeIn(2000);
$( "#blkimg" ).delay(200).fadeIn(2000);

setTimeout(function()
  {
    var x= document.getElementById('pre3');
        x.play();
   },1000);


setTimeout(function()
  {
    document.getElementById("prelist3").style.visibility="visible";
    document.getElementById("prelist3").style.animation="precaution_come1 4s forwards"; 
    document.getElementById("highlighttxt3").style.visibility="hidden";
    // document.getElementById("blkimg").style.visibility="hidden";
$( "#blkimg" ).delay(200).fadeOut(1000);
  },4500); 

setTimeout(function()
  {
    $( "#blkimg" ).delay(200).fadeIn(2000);
  $( "#highlighttxt2" ).delay(200).fadeIn(2000);

  setTimeout(function()
  {
    var x= document.getElementById('pre2');
        x.play();
   },1000);

  setTimeout(function()
    {
      document.getElementById("prelist2").style.visibility="visible";
      document.getElementById("prelist2").style.animation="precaution_come2 4s forwards"; 
      document.getElementById("highlighttxt2").style.visibility="hidden";
      $( "#blkimg" ).delay(200).fadeOut(1000);
  // $( "#highlighttxt1" ).delay(200).fadeOut(1000);
    },6500);
  },9000); 

setTimeout(function()
  {
    $( "#blkimg" ).delay(200).fadeIn(2000);
  $( "#highlighttxt1" ).delay(200).fadeIn(2000);

  setTimeout(function()
  {
    var x= document.getElementById('pre1');
        x.play();
   },1000);

  setTimeout(function()
    {
      document.getElementById("prelist1").style.visibility="visible";
      document.getElementById("prelist1").style.animation="precaution_come3 4s forwards"; 
      document.getElementById("highlighttxt1").style.visibility="hidden";
      $( "#blkimg" ).delay(200).fadeOut(1000);
  // $( "#highlighttxt1" ).delay(200).fadeOut(1000);
    },4500);
  },18000); 

setTimeout(function()
  {
    $( "#blkimg" ).delay(200).fadeIn(2000);
  $( "#highlighttxt4" ).delay(200).fadeIn(2000);

  setTimeout(function()
  {
    var x= document.getElementById('pre4');
        x.play();
   },1000);

  setTimeout(function()
    {
      document.getElementById("prelist4").style.visibility="visible";
      document.getElementById("prelist4").style.animation="precaution_come4 4s forwards"; 
      document.getElementById("highlighttxt4").style.visibility="hidden";
      $( "#blkimg" ).delay(200).fadeOut(1000);
  // $( "#highlighttxt1" ).delay(200).fadeOut(1000);
    },5000);
  },27000); 

setTimeout(function()
  {
    $( "#blkimg" ).delay(200).fadeIn(2000);
  $( "#highlighttxt5" ).delay(200).fadeIn(2000);

  setTimeout(function()
  {
    var x= document.getElementById('pre5');
        x.play();
   },1000);

  setTimeout(function()
    {
      document.getElementById("prelist5").style.visibility="visible";
      document.getElementById("prelist5").style.animation="precaution_come5 4s forwards"; 
      document.getElementById("highlighttxt5").style.visibility="hidden";
      $( "#blkimg" ).delay(200).fadeOut(1000);
  // $( "#highlighttxt1" ).delay(200).fadeOut(1000);
    },4000);
  },36000); 


setTimeout(function()
  {
    $( "#blkimg" ).delay(200).fadeIn(2000);
  $( "#highlighttxt6" ).delay(200).fadeIn(2000);

  setTimeout(function()
  {
    var x= document.getElementById('pre6');
        x.play();
   },1000);

  setTimeout(function()
    {
      document.getElementById("prelist6").style.visibility="visible";
      document.getElementById("prelist6").style.animation="precaution_come6 4s forwards"; 
      document.getElementById("highlighttxt6").style.visibility="hidden";
      $( "#blkimg" ).delay(200).fadeOut(1000);
  // $( "#highlighttxt1" ).delay(200).fadeOut(1000);
    },4500);
  },45000); 


setTimeout(function()
  {
    $( "#blkimg" ).delay(200).fadeIn(2000);
  $( "#highlighttxt7" ).delay(200).fadeIn(2000);

  setTimeout(function()
  {
    var x= document.getElementById('pre7');
        x.play();
   },1000);

  setTimeout(function()
    {
      document.getElementById("prelist7").style.visibility="visible";
      document.getElementById("prelist7").style.animation="precaution_come7 4s forwards"; 
      document.getElementById("highlighttxt7").style.visibility="hidden";
      $( "#blkimg" ).delay(200).fadeOut(1000);
  // $( "#highlighttxt1" ).delay(200).fadeOut(1000);
    },6000);
  },55000); 

setTimeout(function()
  {
    $( "#blkimg" ).delay(200).fadeIn(2000);
  $( "#highlighttxt8" ).delay(200).fadeIn(2000);

  setTimeout(function()
  {
    var x= document.getElementById('pre8');
        x.play();
   },1000);

  setTimeout(function()
    {
      document.getElementById("prelist8").style.visibility="visible";
      document.getElementById("prelist8").style.animation="precaution_come8 4s forwards"; 
      document.getElementById("highlighttxt8").style.visibility="hidden";
      $( "#blkimg" ).delay(200).fadeOut(1000);
  // $( "#highlighttxt1" ).delay(200).fadeOut(1000);
    },4500);
  },64000);

setTimeout(function()
  {
    $( "#blkimg" ).delay(200).fadeIn(2000);
  $( "#highlighttxt9" ).delay(200).fadeIn(2000);

  setTimeout(function()
  {
    var x= document.getElementById('pre9');
        x.play();
   },1000);

  setTimeout(function()
    {
      document.getElementById("prelist9").style.visibility="visible";
      document.getElementById("prelist9").style.animation="precaution_come9 4s forwards"; 
      document.getElementById("highlighttxt9").style.visibility="hidden";
      $( "#blkimg" ).delay(200).fadeOut(1000);
  // $( "#highlighttxt1" ).delay(200).fadeOut(1000);
    },4500);
  },73000); 

setTimeout(function()
  {
    $( "#blkimg" ).delay(200).fadeIn(2000);
  $( "#highlighttxt10" ).delay(200).fadeIn(2000);

  setTimeout(function()
  {
    var x= document.getElementById('pre10');
        x.play();
   },1000);

  setTimeout(function()
    {
      document.getElementById("prelist10").style.visibility="visible";
      document.getElementById("prelist10").style.animation="precaution_come10 4s forwards"; 
      document.getElementById("highlighttxt10").style.visibility="hidden";
      $( "#blkimg" ).delay(200).fadeOut(1000);
  // $( "#highlighttxt1" ).delay(200).fadeOut(1000);
    },4000);
  },82000); 

setTimeout(function()
  {
    document.getElementById("nextButton2").style.visibility="visible";
    document.getElementById("nextButton2_skp").style.visibility="hidden";

   },90000);

 },3000);

}
 

function navNext3()

{
  document.getElementById("canvas2").style.visibility="hidden";
  document.getElementById("canvas3").style.visibility="visible";

 
 setTimeout(function()
  {

   $("#intro_previous").slideDown("slow");
    
  },1000);

 setTimeout(function()
  {

    var x= document.getElementById('aud_intro_previous');
        x.play();

   },2000);

}

function navNext3_skp()

{
  document.getElementById("canvas2").style.visibility="hidden";
  document.getElementById("canvas3").style.visibility="visible";

 
 setTimeout(function()
  {

   $("#intro_previous").slideDown("slow");
    
  },1000);

 setTimeout(function()
  {

    var x= document.getElementById('aud_intro_previous');
        x.play();

   },2000);

}

function navNext3_skp()

{
  document.getElementById("canvas2").style.visibility="hidden";
  document.getElementById("canvas3").style.visibility="visible";

 
 setTimeout(function()
  {

   $("#intro_previous").slideDown("slow");
    
  },1000);

 setTimeout(function()
  {

    var x= document.getElementById('aud_intro_previous');
        x.play();

   },2000);

}

function navNext3_skp()

{
  document.getElementById("canvas2").style.visibility="hidden";
  document.getElementById("canvas3").style.visibility="visible";

 
 setTimeout(function()
  {

   $("#intro_previous").slideDown("slow");
    
  },1000);

 setTimeout(function()
  {

    var x= document.getElementById('aud_intro_previous');
        x.play();

   },2000);



}



function cplate_stop()

{
  
  document.getElementById("cplate").style.visibility="hidden";
  document.getElementById("cplate2").style.visibility="visible";

}

function step1_3hide()

{
  
  document.getElementById("step1_3").style.visibility="hidden";
  
}



function dronefirstcome()

{


document.getElementById("drnfirt").style.animation="drnfirt_come 7s forwards";

setTimeout(function()
  {
    typeWriter()
    
    var x= document.getElementById('intro1');
        x.play();

  },7500);

setTimeout(function()
  {
    typeWriter2()
 
    var x= document.getElementById('intro2');
        x.play();
 
  },10000);

setTimeout(function()
  {
    typeWriter3()
 
    var x= document.getElementById('intro3');
        x.play();
  
  },12000);

setTimeout(function()
  {
    typeWriter4()
 
    var x= document.getElementById('intro4');
        x.play();
 
  },14500);

setTimeout(function()
  {
    typeWriter5()
 
    var x= document.getElementById('intro5');
        x.play();
 
  },16500);

setTimeout(function()
  {
    typeWriter6()
 
    var x= document.getElementById('intro6');
        x.play();

  },18500);

setTimeout(function()
  {
    typeWriter7()
 
    var x= document.getElementById('intro7');
        x.play();
 
  },20500);

setTimeout(function()
  {
    $( "#abttext" ).delay(200).fadeIn(2000);
  },22500);

setTimeout(function()
  {
    document.getElementById("arrowintro1").style.visibility="visible";
  },24000);

}


var i = 0;
var txt = 'QUADCOPTER';
var speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("quadname").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

var i2 = 0;
var txt2 = '✔  Frame: 450';
var speed2 = 50;

function typeWriter2() {
  if (i2 < txt2.length) {
    document.getElementById("quadfeat1").innerHTML += txt2.charAt(i2);
    i2++;
    setTimeout(typeWriter2, speed2);
  }
}

var i3 = 0;
var txt3 = '✔  Rotors: 4 unit';
var speed3 = 50;

function typeWriter3() {
  if (i3 < txt3.length) {
    document.getElementById("quadfeat2").innerHTML += txt3.charAt(i3);
    i3++;
    setTimeout(typeWriter3, speed3);
  }
}

var i4 = 0;
var txt4 = '✔  Flight Time: 15 min.';
var speed4 = 50;

function typeWriter4() {
  if (i4 < txt4.length) {
    document.getElementById("quadfeat3").innerHTML += txt4.charAt(i4);
    i4++;
    setTimeout(typeWriter4, speed4);
  }
}


var i5 = 0;
var txt5 = '✔  Altitude: 100 feet';
var speed5 = 50;

function typeWriter5() {
  if (i5 < txt5.length) {
    document.getElementById("quadfeat4").innerHTML += txt5.charAt(i5);
    i5++;
    setTimeout(typeWriter5, speed5);
  }
}


var i6 = 0;
var txt6 = '✔  Pay Load: 2 kilogram';
var speed6 = 50;

function typeWriter6() {
  if (i6 < txt6.length) {
    document.getElementById("quadfeat5").innerHTML += txt6.charAt(i6);
    i6++;
    setTimeout(typeWriter6, speed6);
  }
}

var i7 = 0;
var txt7 = '✔  Emergency Landing: Yes';
var speed7 = 50;

function typeWriter7() {
  if (i7 < txt7.length) {
    document.getElementById("quadfeat6").innerHTML += txt7.charAt(i7);
    i7++;
    setTimeout(typeWriter7, speed7);
  }

}





var i = 0;
var txt = 'QUADCOPTER';
var speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("quadname").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

var i2 = 0;
var txt2 = '✔  Frame: 450';
var speed2 = 50;

function typeWriter2() {
  if (i2 < txt2.length) {
    document.getElementById("quadfeat1").innerHTML += txt2.charAt(i2);
    i2++;
    setTimeout(typeWriter2, speed2);
  }
}

var i3 = 0;
var txt3 = '✔  Rotors: 4 units';
var speed3 = 50;

function typeWriter3() {
  if (i3 < txt3.length) {
    document.getElementById("quadfeat2").innerHTML += txt3.charAt(i3);
    i3++;
    setTimeout(typeWriter3, speed3);
  }
}

var i4 = 0;
var txt4 = '✔  Flight Time: 15 mins.';
var speed4 = 50;

function typeWriter4() {
  if (i4 < txt4.length) {
    document.getElementById("quadfeat3").innerHTML += txt4.charAt(i4);
    i4++;
    setTimeout(typeWriter4, speed4);
  }
}


var i5 = 0;
var txt5 = '✔  Altitude: 100 feet';
var speed5 = 50;

function typeWriter5() {
  if (i5 < txt5.length) {
    document.getElementById("quadfeat4").innerHTML += txt5.charAt(i5);
    i5++;
    setTimeout(typeWriter5, speed5);
  }
}


var i6 = 0;
var txt6 = '✔  Pay Load: 2 kilograms';
var speed6 = 50;

function typeWriter6() {
  if (i6 < txt6.length) {
    document.getElementById("quadfeat5").innerHTML += txt6.charAt(i6);
    i6++;
    setTimeout(typeWriter6, speed6);
  }
}

var i7 = 0;
var txt7 = '✔  Emergency Landing: Yes';
var speed7 = 50;

function typeWriter7() {
  if (i7 < txt7.length) {
    document.getElementById("quadfeat6").innerHTML += txt7.charAt(i7);
    i7++;
    setTimeout(typeWriter7, speed7);
  }
}

// ===========================================CANVAS3======================

function ok_previous()
{

const audio1 = document.querySelector("#aud_intro_previous");
audio1.pause();
audio1.currentTime = 0;

    $( "#intro_previous" ).fadeOut(1000);


    setTimeout(function()
          {

        $("#step3_1").slideDown("slow");
    
          },1000);

    setTimeout(function()
      {

    var x= document.getElementById('aud_stp3_1');
        x.play();

      },1500);

    setTimeout(function()
          {

        document.getElementById("arowdwn3_1").style.visibility="visible";
        document.getElementById("tb_wire4arm").style.visibility="visible";

        document.getElementById("arowdwn3_1").style.animation="arowdwn3_1shk 0.5s infinite";
    
          },3500);
}


function wire4armflip()

{
    
    document.getElementById("tb_wire4arm").style.visibility="hidden";
    document.getElementById("arowdwn3_1").style.visibility="hidden";
    document.getElementById("step3_1").style.visibility="hidden";
    document.getElementById("wire4arm_widtie").style.animation="wire4arm_widtie_flip 1s forwards";

    setTimeout(function()
          {

       document.getElementById("wire4arm_widtie").style.visibility="hidden";
       document.getElementById("wire4arm_widtieflip").style.visibility="visible"; 
       document.getElementById("wire4arm_widtieflip").style.animation="wire4arm_widtieflip 1s forwards";
    
          },1000);

      setTimeout(function()
          {

       $("#step3_6").slideDown("slow");

       document.getElementById("tape1").style.animation="naza_pop 4s infinite";
      
          },3500);

      setTimeout(function()
      {

    var x= document.getElementById('aud_stp3_6');
        x.play();

      },4000);

      setTimeout(function()
          {

       document.getElementById("tb_tape1").style.visibility="hidden";

       document.getElementById("tgt_tape1").style.visibility="visible";
       document.getElementById("tgt_tape1").style.height="130px";
       document.getElementById("tgt_tape1").style.width="130px";

       $('#tape2').draggable({
        revert: true,
        droptarget: '#tgt_tape1',
        drop: tape2_drop
        });
    
     },7000);

}


function naza_drop(event, droptarget)

{
  $(this).draggable('destroy');

  document.getElementById("tgt_naza").style.visibility="hidden";
  document.getElementById("tgt_naza").style.height="0px";
  document.getElementById("tgt_naza").style.width="0px";

  document.getElementById("naza2").style.top="270px";
  document.getElementById("naza2").style.left="314px";
  document.getElementById("naza2").style.height="80px";

  setTimeout(function()
          {

       $( "#zoomnaza" ).fadeIn(1000);
             
          },1000);

  setTimeout(function()
          {

       document.getElementById("svg_can3").style.visibility="visible";
       document.getElementById("handle1_can3").style.visibility="visible";

       document.getElementById("oranwire1_can3").style.visibility="visible";
       document.getElementById("tb_pmuwire1").style.visibility="visible";
       document.getElementById("tb_pmuwire2").style.visibility="visible";

       document.getElementById("blackwire1_can3").style.visibility="visible";
       document.getElementById("handle2_can3").style.visibility="visible";

       document.getElementById("handle33_can3").style.visibility="visible";
       document.getElementById("tb_escwire1").style.visibility="visible";
       document.getElementById("oranwire3_can3").style.visibility="visible";

       document.getElementById("handle44_can3").style.visibility="visible";
       document.getElementById("tb_escwire2").style.visibility="visible";
       document.getElementById("oranwire4_can3").style.visibility="visible";

       document.getElementById("handle55_can3").style.visibility="visible";
       document.getElementById("tb_escwire3").style.visibility="visible";
       document.getElementById("oranwire5_can3").style.visibility="visible";

       document.getElementById("handle66_can3").style.visibility="visible";
       document.getElementById("tb_escwire4").style.visibility="visible";
       document.getElementById("oranwire6_can3").style.visibility="visible";

       $( "#expport" ).fadeIn(1000);

          },1500);

  setTimeout(function()
          {

       $("#step3_3").slideDown("slow");
      
          },3000);

  setTimeout(function()
      {

    var x= document.getElementById('aud_stp3_3');
        x.play();

      },3500);

  setTimeout(function()
          {

      document.getElementById("arowdwn_can3").style.visibility="visible";
      document.getElementById("arowdwn_can3").style.animation="arowdwn_can3_shk 0.5s infinite";
      document.getElementById("arowdwn2_can3").style.visibility="visible";

      document.getElementById("handle1_div_can3").style.visibility="visible";
      document.getElementById("handle1_div_can3").style.height="100px";
      document.getElementById("handle1_div_can3").style.width="55px";

      document.getElementById("tb_pmuwire1").style.visibility="hidden";
      
          },8500);

}

function naza_hd()

{
    document.getElementById("naza").style.visibility="hidden";
    document.getElementById("naza2").style.visibility="visible";
}

function tape1_hd()

{
    document.getElementById("tape1").style.visibility="hidden";
    document.getElementById("tape2").style.visibility="visible";
}

function step3_2hd()

{
    document.getElementById("step3_2").style.visibility="hidden";
}

function step3_6hd()

{
    document.getElementById("step3_6").style.visibility="hidden";
}


function tape2_drop(event, droptarget)

{
  $(this).draggable('destroy');

  document.getElementById("tgt_tape1").style.visibility="hidden";
  document.getElementById("tgt_tape1").style.height="0px";
  document.getElementById("tgt_tape1").style.width="0px";

  document.getElementById("tape2").style.left="327px";
  document.getElementById("tape2").style.top="297px";
  document.getElementById("tape2").style.height="25px";

    setTimeout(function()
          {

       $("#intro_naza").slideDown("slow");
      
          },1000);

    setTimeout(function()
      {

    var x= document.getElementById('aud_intro_naza');
        x.play();

      },1500);

    setTimeout(function()
          {

       document.getElementById("skpbtn_naza").style.visibility="hidden";
       document.getElementById("okbtn_naza").style.visibility="visible";
       
     },14500);

  
}
// ===================================wire==============================


var targets3_1 = $("#handle1_div_can3");
var bezierWeight5 = 0.675;

var handles_can3 = document.querySelectorAll(".handle_can3");
var path_can3 = document.querySelector(".path_can3");

TweenLite.set(handles_can3[1], { x: 349, y: 71 });
TweenLite.set(handles_can3[0], { x: 377, y: 109 });

Draggable.create(handles_can3, {
  // onDrag: updatePath

  onDrag:function(e) {

  var x1 = handles_can3[1]._gsTransform.x;
  var y1 = handles_can3[1]._gsTransform.y;
  
  var x4 = handles_can3[0]._gsTransform.x;
  var y4 = handles_can3[0]._gsTransform.y;
  
  var dx = Math.abs(x4 - x1) * bezierWeight5;
  
  var x2 = x1 - dx;
  var x3 = x4 + dx;
  
  var data = `M${x1} ${y1} C ${x2} ${y1} ${x3} ${y4} ${x4} ${y4}`;
  
  path_can3.setAttribute("d", data);
   document.getElementById("arowdwn_can3").style.visibility="hidden";
   document.getElementById("oranwire1_can3").style.visibility="hidden";
   // document.getElementById("oranwire11_can3").style.visibility="visible";
   document.getElementById("step3_3").style.visibility="hidden";
   
  for(var i=0; i<targets3_1.length;i++)

  {
    if (this.hitTest(targets3_1[i],"100%")) 

      { this.vars.onDragEnd=null; 
        this.disable();


document.getElementById("handle1_div_can3").style.visibility="hidden";
document.getElementById("handle1_div_can3").style.height="0px";
document.getElementById("handle1_div_can3").style.width="0px";

document.getElementById("svg_can3").style.visibility="hidden";
document.getElementById("path_can3").style.visibility="hidden";
document.getElementById("handle1_can3").style.visibility="hidden";
document.getElementById("arowdwn2_can3").style.visibility="hidden";

document.getElementById("oranwire111_can3").style.visibility="visible";
// document.getElementById("oranwire11_can3").style.visibility="hidden";

document.getElementById("svg2_can3").style.visibility="visible";

setTimeout(function()
          {

       $("#step3_4").slideDown("slow");
      
          },500);

setTimeout(function()
      {

    var x= document.getElementById('aud_stp3_4');
        x.play();

      },1000);

  setTimeout(function()
          {

      document.getElementById("arowdwn3_can3").style.visibility="visible";
      document.getElementById("arowdwn3_can3").style.animation="arowdwn3_can3_shk 0.5s infinite";
      document.getElementById("arowdwn4_can3").style.visibility="visible";

      document.getElementById("handle2_div_can3").style.visibility="visible";
      document.getElementById("handle2_div_can3").style.height="110px";
      document.getElementById("handle2_div_can3").style.width="65px";

      document.getElementById("tb_pmuwire2").style.visibility="hidden";
      
          },7000);

    }
  }
}
  
});




var targets3_2 = $("#handle2_div_can3");
var bezierWeight5 = 0.675;

var handles2_can3 = document.querySelectorAll(".handle2_can3");
var path2_can3 = document.querySelector(".path2_can3");

TweenLite.set(handles2_can3[0], { x: 478, y: 104 });
TweenLite.set(handles2_can3[1], { x: 497, y: 52 });

Draggable.create(handles2_can3, {
  // onDrag: updatePath

  onDrag:function(e) {

  var x1 = handles2_can3[0]._gsTransform.x;
  var y1 = handles2_can3[0]._gsTransform.y;
  
  var x4 = handles2_can3[1]._gsTransform.x;
  var y4 = handles2_can3[1]._gsTransform.y;
  
  var dx = Math.abs(x4 - x1) * bezierWeight5;
  
  var x2 = x1 - dx;
  var x3 = x4 + dx;
  
  var data = `M${x1} ${y1} C ${x2} ${y1} ${x3} ${y4} ${x4} ${y4}`;
  
  path2_can3.setAttribute("d", data);
   document.getElementById("arowdwn3_can3").style.visibility="hidden";
   document.getElementById("blackwire1_can3").style.visibility="hidden";
   // document.getElementById("blackwire11_can3").style.visibility="visible";
   document.getElementById("step3_4").style.visibility="hidden";
   
  for(var i=0; i<targets3_2.length;i++)

  {
    if (this.hitTest(targets3_2[i],"100%")) 

      { this.vars.onDragEnd=null; 
        this.disable();


document.getElementById("handle2_div_can3").style.visibility="hidden";
document.getElementById("handle2_div_can3").style.height="0px";
document.getElementById("handle2_div_can3").style.width="0px";

document.getElementById("pmupin3").style.visibility="visible";

$( "#expport" ).fadeOut(1000);

document.getElementById("svg2_can3").style.visibility="hidden";
document.getElementById("path2_can3").style.visibility="hidden";
document.getElementById("handle2_can3").style.visibility="hidden";
document.getElementById("arowdwn4_can3").style.visibility="hidden";

document.getElementById("naza2").style.visibility="hidden";

document.getElementById("blackwire111_can3").style.visibility="visible";
// document.getElementById("blackwire11_can3").style.visibility="hidden";

document.getElementById("svg3_can3").style.visibility="visible";

setTimeout(function()
          {

       $("#step3_5").slideDown("slow");
      
          },500);

setTimeout(function()
      {

    var x= document.getElementById('aud_stp3_5');
        x.play();

      },1000);

setTimeout(function()

          {

$( "#motorport" ).fadeIn(1000);

          },1000);

  setTimeout(function()
          {

      document.getElementById("arowdwn5_can3").style.visibility="visible";
      document.getElementById("arowdwn5_can3").style.animation="arowdwn5_can3_shk 0.5s infinite";
      document.getElementById("arowdwn6_can3").style.visibility="visible";

      document.getElementById("handle3_div_can3").style.visibility="visible";
      document.getElementById("handle3_div_can3").style.height="90px";
      document.getElementById("handle3_div_can3").style.width="55px";

      document.getElementById("tb_escwire1").style.visibility="hidden";
      
          },8000);

    }
  }
}
  
});





var targets3_3 = $("#handle3_div_can3");
var bezierWeight5 = 0.675;

var handles3_can3 = document.querySelectorAll(".handle3_can3");
var path3_can3 = document.querySelector(".path3_can3");

TweenLite.set(handles3_can3[1], { x: 544, y: 493 });
TweenLite.set(handles3_can3[0], { x: 576, y: 540 });

Draggable.create(handles3_can3, {
  // onDrag: updatePath

  onDrag:function(e) {

  var x1 = handles3_can3[1]._gsTransform.x;
  var y1 = handles3_can3[1]._gsTransform.y;
  
  var x4 = handles3_can3[0]._gsTransform.x;
  var y4 = handles3_can3[0]._gsTransform.y;
  
  var dx = Math.abs(x4 - x1) * bezierWeight5;
  
  var x2 = x1 - dx;
  var x3 = x4 + dx;
  
  var data = `M${x1} ${y1} C ${x2} ${y1} ${x3} ${y4} ${x4} ${y4}`;
  
  path3_can3.setAttribute("d", data);
   document.getElementById("arowdwn5_can3").style.visibility="hidden";
   document.getElementById("oranwire3_can3").style.visibility="hidden";
   // document.getElementById("oranwire33_can3").style.visibility="visible";
   document.getElementById("step3_5").style.visibility="hidden";
   
  for(var i=0; i<targets3_3.length;i++)

  {
    if (this.hitTest(targets3_3[i],"100%")) 

      { this.vars.onDragEnd=null; 
        this.disable();


document.getElementById("handle3_div_can3").style.visibility="hidden";
document.getElementById("handle3_div_can3").style.height="0px";
document.getElementById("handle3_div_can3").style.width="0px";

document.getElementById("svg3_can3").style.visibility="hidden";
document.getElementById("path3_can3").style.visibility="hidden";
document.getElementById("handle33_can3").style.visibility="hidden";
document.getElementById("arowdwn6_can3").style.visibility="hidden";

document.getElementById("oranwire333_can3").style.visibility="visible";
// document.getElementById("oranwire33_can3").style.visibility="hidden";

document.getElementById("svg4_can3").style.visibility="visible";

  setTimeout(function()
          {

      document.getElementById("arowdwn7_can3").style.visibility="visible";
      document.getElementById("arowdwn7_can3").style.animation="arowdwn7_can3_shk 0.5s infinite";
      document.getElementById("arowdwn8_can3").style.visibility="visible";

      document.getElementById("handle4_div_can3").style.visibility="visible";
      document.getElementById("handle4_div_can3").style.height="100px";
      document.getElementById("handle4_div_can3").style.width="55px";

      document.getElementById("tb_escwire2").style.visibility="hidden";
      
          },500);

    }
  }
}
  
});



var targets3_4 = $("#handle4_div_can3");
var bezierWeight5 = 0.675;

var handles4_can3 = document.querySelectorAll(".handle4_can3");
var path4_can3 = document.querySelector(".path4_can3");

TweenLite.set(handles4_can3[1], { x: 522, y: 510 });
TweenLite.set(handles4_can3[0], { x: 543, y: 554 });

Draggable.create(handles4_can3, {
  // onDrag: updatePath

  onDrag:function(e) {

  var x1 = handles4_can3[1]._gsTransform.x;
  var y1 = handles4_can3[1]._gsTransform.y;
  
  var x4 = handles4_can3[0]._gsTransform.x;
  var y4 = handles4_can3[0]._gsTransform.y;
  
  var dx = Math.abs(x4 - x1) * bezierWeight5;
  
  var x2 = x1 - dx;
  var x3 = x4 + dx;
  
  var data = `M${x1} ${y1} C ${x2} ${y1} ${x3} ${y4} ${x4} ${y4}`;
  
  path4_can3.setAttribute("d", data);
   document.getElementById("arowdwn7_can3").style.visibility="hidden";
   document.getElementById("oranwire4_can3").style.visibility="hidden";
   // document.getElementById("oranwire44_can3").style.visibility="visible";
   
  for(var i=0; i<targets3_4.length;i++)

  {
    if (this.hitTest(targets3_4[i],"100%")) 

      { this.vars.onDragEnd=null; 
        this.disable();


document.getElementById("handle4_div_can3").style.visibility="hidden";
document.getElementById("handle4_div_can3").style.height="0px";
document.getElementById("handle4_div_can3").style.width="0px";

document.getElementById("svg4_can3").style.visibility="hidden";
document.getElementById("path4_can3").style.visibility="hidden";
document.getElementById("handle44_can3").style.visibility="hidden";
document.getElementById("arowdwn8_can3").style.visibility="hidden";

document.getElementById("oranwire444_can3").style.visibility="visible";
// document.getElementById("oranwire44_can3").style.visibility="hidden";

document.getElementById("svg5_can3").style.visibility="visible";

  setTimeout(function()
          {

      document.getElementById("arowdwn9_can3").style.visibility="visible";
      document.getElementById("arowdwn9_can3").style.animation="arowdwn9_can3_shk 0.5s infinite";
      document.getElementById("arowdwn10_can3").style.visibility="visible";

      document.getElementById("handle5_div_can3").style.visibility="visible";
      document.getElementById("handle5_div_can3").style.height="100px";
      document.getElementById("handle5_div_can3").style.width="55px";

      document.getElementById("tb_escwire3").style.visibility="hidden";
      
          },500);
    }
  }
}
  
});



var targets3_5 = $("#handle5_div_can3");
var bezierWeight5 = 0.675;

var handles5_can3 = document.querySelectorAll(".handle5_can3");
var path5_can3 = document.querySelector(".path5_can3");

TweenLite.set(handles5_can3[1], { x: 500, y: 511 });
TweenLite.set(handles5_can3[0], { x: 524, y: 560 });

Draggable.create(handles5_can3, {
  // onDrag: updatePath

  onDrag:function(e) {

  var x1 = handles5_can3[1]._gsTransform.x;
  var y1 = handles5_can3[1]._gsTransform.y;
  
  var x4 = handles5_can3[0]._gsTransform.x;
  var y4 = handles5_can3[0]._gsTransform.y;
  
  var dx = Math.abs(x4 - x1) * bezierWeight5;
  
  var x2 = x1 - dx;
  var x3 = x4 + dx;
  
  var data = `M${x1} ${y1} C ${x2} ${y1} ${x3} ${y4} ${x4} ${y4}`;
  
  path5_can3.setAttribute("d", data);
   document.getElementById("arowdwn9_can3").style.visibility="hidden";
   document.getElementById("oranwire5_can3").style.visibility="hidden";
   // document.getElementById("oranwire55_can3").style.visibility="visible";
   
  for(var i=0; i<targets3_5.length;i++)

  {
    if (this.hitTest(targets3_5[i],"100%")) 

      { this.vars.onDragEnd=null; 
        this.disable();


document.getElementById("handle5_div_can3").style.visibility="hidden";
document.getElementById("handle5_div_can3").style.height="0px";
document.getElementById("handle5_div_can3").style.width="0px";

document.getElementById("svg5_can3").style.visibility="hidden";
document.getElementById("path5_can3").style.visibility="hidden";
document.getElementById("handle55_can3").style.visibility="hidden";
document.getElementById("arowdwn10_can3").style.visibility="hidden";

document.getElementById("oranwire555_can3").style.visibility="visible";
// document.getElementById("oranwire55_can3").style.visibility="hidden";

document.getElementById("svg6_can3").style.visibility="visible";

  setTimeout(function()
          {

      document.getElementById("arowdwn11_can3").style.visibility="visible";
      document.getElementById("arowdwn11_can3").style.animation="arowdwn11_can3_shk 0.5s infinite";
      document.getElementById("arowdwn12_can3").style.visibility="visible";

      document.getElementById("handle6_div_can3").style.visibility="visible";
      document.getElementById("handle6_div_can3").style.height="100px";
      document.getElementById("handle6_div_can3").style.width="55px";

      document.getElementById("tb_escwire4").style.visibility="hidden";
      
          },500);


    }
  }
}
  
});



var targets3_6 = $("#handle6_div_can3");
var bezierWeight5 = 0.675;

var handles6_can3 = document.querySelectorAll(".handle6_can3");
var path6_can3 = document.querySelector(".path6_can3");

TweenLite.set(handles6_can3[1], { x: 473, y: 517 });
TweenLite.set(handles6_can3[0], { x: 485, y: 567 });

Draggable.create(handles6_can3, {
  // onDrag: updatePath

  onDrag:function(e) {

  var x1 = handles6_can3[1]._gsTransform.x;
  var y1 = handles6_can3[1]._gsTransform.y;
  
  var x4 = handles6_can3[0]._gsTransform.x;
  var y4 = handles6_can3[0]._gsTransform.y;
  
  var dx = Math.abs(x4 - x1) * bezierWeight5;
  
  var x2 = x1 - dx;
  var x3 = x4 + dx;
  
  var data = `M${x1} ${y1} C ${x2} ${y1} ${x3} ${y4} ${x4} ${y4}`;
  
  path6_can3.setAttribute("d", data);
   document.getElementById("arowdwn11_can3").style.visibility="hidden";
   document.getElementById("oranwire6_can3").style.visibility="hidden";
   // document.getElementById("oranwire66_can3").style.visibility="visible";
   
  for(var i=0; i<targets3_6.length;i++)

  {
    if (this.hitTest(targets3_6[i],"100%")) 

      { this.vars.onDragEnd=null; 
        this.disable();


document.getElementById("handle6_div_can3").style.visibility="hidden";
document.getElementById("handle6_div_can3").style.height="0px";
document.getElementById("handle6_div_can3").style.width="0px";

document.getElementById("svg6_can3").style.visibility="hidden";
document.getElementById("path6_can3").style.visibility="hidden";
document.getElementById("handle66_can3").style.visibility="hidden";
document.getElementById("arowdwn12_can3").style.visibility="hidden";

document.getElementById("oranwire666_can3").style.visibility="visible";
$( "#motorport" ).fadeOut(1000);
// document.getElementById("oranwire66_can3").style.visibility="hidden";

  setTimeout(function()
          {

      $( "#zoomnaza" ).fadeOut(1500);

      $( "#blackwire111_can3" ).fadeOut(1500);
      $( "#oranwire111_can3" ).fadeOut(1500);
      $( "#oranwire333_can3" ).fadeOut(1500);
      $( "#oranwire444_can3" ).fadeOut(1500);
      $( "#oranwire555_can3" ).fadeOut(1500);
      $( "#oranwire666_can3" ).fadeOut(1500);
      $( "#pmupin3" ).fadeOut(1500);

          },1000);

  setTimeout(function()
          {

      $( "#platewithoutPMU" ).fadeIn(1500);
      $( "#pmuwithwire" ).fadeIn(1500);
      $( "#wire4arm_widtieflip" ).fadeOut(1500);
      $( "#tape2" ).fadeOut(1500);
     
          },500);

setTimeout(function()
          {

       $("#step3_7").slideDown("slow");
      
          },2500);

setTimeout(function()
      {

    var x= document.getElementById('aud_stp3_7');
        x.play();

      },3000);


  setTimeout(function()
          {

            // $( "#zoompmu" ).fadeIn(1000);
            // $( "#pmu2" ).fadeIn(1000);

       document.getElementById("tb_pmu").style.visibility="visible";
       document.getElementById("arowdwn13_can3").style.visibility="visible";
       document.getElementById("arowdwn13_can3").style.animation="arowdwn13_can3_shk 0.5s infinite";
      
          },5000);



  // setTimeout(function()
  //         {

  //      $("#step3_7").slideDown("slow");
  //      document.getElementById("pmu2").style.animation="naza_pop 4s infinite";
      
  //         },5000);

  // setTimeout(function()
  //         {

  //      document.getElementById("tb_pmu").style.visibility="hidden";

  //      document.getElementById("tgt_pmu2").style.visibility="visible";
  //      document.getElementById("tgt_pmu2").style.height="130px";
  //      document.getElementById("tgt_pmu2").style.width="143px";

  //      $('#pmu3').draggable({
  //       revert: true,
  //       droptarget: '#tgt_pmu2',
  //       drop: pmu3_drop
  //       });
       
  //         },6000);

    }
  }
}
  
});



function pmu3_drop(event, droptarget)

{
  $(this).draggable('destroy');

  document.getElementById("tgt_pmu2").style.visibility="hidden";
  document.getElementById("tgt_pmu2").style.height="0px";
  document.getElementById("tgt_pmu2").style.width="0px";

  document.getElementById("pmu3").style.visibility="hidden";
  document.getElementById("pmu4").style.visibility="visible";

  setTimeout(function()
          {

       $( "#pmu4" ).fadeOut(1000);
       // $( "#zoompmu" ).fadeOut(1000);

          },1000);

  }



function pmu2_hd()

{
    document.getElementById("pmu2").style.visibility="hidden";
    document.getElementById("pmu3").style.visibility="visible";
}

function pmu_fix()
{
    document.getElementById("step3_7").style.visibility="hidden";
    document.getElementById("tb_pmu").style.visibility="hidden";
    document.getElementById("arowdwn13_can3").style.visibility="hidden";

    document.getElementById("pmuwithwire").style.animation="pmuwithwirefix 0.4s forwards";

    setTimeout(function()
          {

        $( "#platewithoutPMU" ).fadeOut(300);
        $( "#pmuwithwire" ).fadeOut(300);

        $( "#wire4arm_pmufix" ).fadeIn(300);

          },200);

    setTimeout(function()
          {

       $("#step3_8").slideDown("slow");
       document.getElementById("tie").style.animation="naza_pop 4s infinite";

          },2000);

    setTimeout(function()
      {

    var x= document.getElementById('aud_stp3_8');
        x.play();

      },2500);

    setTimeout(function()
          {

        document.getElementById("tb_tie").style.visibility="hidden";

       document.getElementById("tgt_tie").style.visibility="visible";
       document.getElementById("tgt_tie").style.height="130px";
       document.getElementById("tgt_tie").style.width="130px";

       $('#tie2').draggable({
        revert: true,
        droptarget: '#tgt_tie',
        drop: tie_drop
        });

          },7500);

  
}

function tie_hd()

{
    document.getElementById("tie").style.visibility="hidden";
    document.getElementById("tie2").style.visibility="visible";
}

function stp3_8hd()

{
    document.getElementById("step3_8").style.visibility="hidden";
}

function stp3_7()

{
    document.getElementById("step3_7").style.visibility="hidden";
}


function tie_drop(event, droptarget)

{
  $(this).draggable('destroy');

  document.getElementById("tgt_tie").style.visibility="hidden";
  document.getElementById("tgt_tie").style.height="0px";
  document.getElementById("tgt_tie").style.width="0px";

  document.getElementById("tie2").style.visibility="hidden";
  document.getElementById("tie_tied").style.visibility="visible";

  setTimeout(function()
          {

  document.getElementById("nextButton3").style.visibility="visible";

          },500);
}


function skp_naza()

{

const audio1 = document.querySelector("#aud_intro_naza");
audio1.pause();
audio1.currentTime = 0;


       $( "#intro_naza" ).fadeOut(1000);
    

    setTimeout(function()
          {

       $("#step3_2").slideDown("slow");

       document.getElementById("naza").style.animation="naza_pop 4s infinite";
      
          },1500);

    setTimeout(function()
      {

    var x= document.getElementById('aud_stp3_2');
        x.play();

      },3000);

  setTimeout(function()
          {

       document.getElementById("tb_naza").style.visibility="hidden";

       document.getElementById("tgt_naza").style.visibility="visible";
       document.getElementById("tgt_naza").style.height="175px";
       document.getElementById("tgt_naza").style.width="175px";

       $('#naza2').draggable({
        revert: true,
        droptarget: '#tgt_naza',
        drop: naza_drop
        });
    
     },7000);

}

function ok_naza()

{

 $( "#intro_naza" ).fadeOut(1000);
    

    setTimeout(function()
          {

       $("#step3_2").slideDown("slow");

       document.getElementById("naza").style.animation="naza_pop 4s infinite";
      
          },1500);

    setTimeout(function()
      {

    var x= document.getElementById('aud_stp3_2');
        x.play();

      },3000);

  setTimeout(function()
          {

       document.getElementById("tb_naza").style.visibility="hidden";

       document.getElementById("tgt_naza").style.visibility="visible";
       document.getElementById("tgt_naza").style.height="175px";
       document.getElementById("tgt_naza").style.width="175px";

       $('#naza2').draggable({
        revert: true,
        droptarget: '#tgt_naza',
        drop: naza_drop
        });
    
     },7000);


}


// ===========================================CANVAS3======================

// =========================================CANVAS4==================

function navNext4()

{
  document.getElementById("canvas3").style.visibility="hidden";
  document.getElementById("canvas4").style.visibility="visible";
  document.getElementById("mrk_01").innerHTML=marks;
}


// ============================MCQ CANVAS4====================================



function ansshw_c4() {

            if(document.getElementById('optionB').checked) {
                document.getElementById("ans_can4").innerHTML = document.getElementById("optionA").value;
                document.getElementById("showans").style.display="none";
                document.getElementById("mrk_01").innerHTML=marks;
                document.getElementById("nextButton4").style.visibility="visible";
            }
            else if(document.getElementById('optionA').checked) {
              marks=1;
              document.getElementById("ans_can4").style.color="green";
              document.getElementById("mrk_01").innerHTML=marks;
              // document.getElementById("mrk_00").style.visibility="hidden";
              document.getElementById("got_mrkcan4").style.visibility="visible";

              setTimeout(function()
              {

              var x= document.getElementById('aud_congo1mrk');
              x.play();

              },300);

              document.getElementById("ans_can4").innerHTML = document.getElementById("optionB").value;
              document.getElementById("showans").style.display="none";
              document.getElementById("nextButton4").style.visibility="visible";

              }

            else if(document.getElementById('optionC').checked) {
             
                document.getElementById("ans_can4").innerHTML = document.getElementById("optionC").value;
                document.getElementById("showans").style.display="none";
                document.getElementById("nextButton4").style.visibility="visible";
                document.getElementById("mrk_01").innerHTML=marks;
            }
            else if(document.getElementById('optionD').checked) {
                document.getElementById("ans_can4").innerHTML = document.getElementById("optionD").value;
                document.getElementById("showans").style.display="none";
                document.getElementById("nextButton4").style.visibility="visible";
                document.getElementById("mrk_01").innerHTML=marks;
            }
            else {
                document.getElementById("ans_can4").innerHTML = "Select Option";
            }
        }
 

// ============================MCQ CANVAS4====================================


// =========================================CANVAS4==================

// =========================================CANVAS5==================

function navNext5()

{
  document.getElementById("canvas4").style.visibility="hidden";
  document.getElementById("canvas5").style.visibility="visible";

  setTimeout(function()
  {

   $("#step5_1").slideDown("slow");
   document.getElementById("tape3").style.animation="naza_pop 4s infinite";
    
  },1000);

  setTimeout(function()
  {
    var x= document.getElementById('aud_stp5_1');
        x.play();
   },1500);

      setTimeout(function()
          {

       document.getElementById("tb_tape3").style.visibility="hidden";

       document.getElementById("tgt_tape3").style.visibility="visible";
       document.getElementById("tgt_tape3").style.height="130px";
       document.getElementById("tgt_tape3").style.width="130px";

       $('#tape4').draggable({
        revert: true,
        droptarget: '#tgt_tape3',
        drop: tape3_drop
        });
    
     },4500);
  
}



function tape3_hd()

{
    document.getElementById("tape3").style.visibility="hidden";
    document.getElementById("tape4").style.visibility="visible";
}

function stp5_1hd()

{
    document.getElementById("step5_1").style.visibility="hidden";
}



function tape3_drop(event, droptarget)

{
  $(this).draggable('destroy');

  document.getElementById("tgt_tape3").style.visibility="hidden";
  document.getElementById("tgt_tape3").style.height="0px";
  document.getElementById("tgt_tape3").style.width="0px";

  document.getElementById("tape4").style.height="25px";
  document.getElementById("tape4").style.top="299px";
  document.getElementById("tape4").style.left="240px";

  setTimeout(function()
  {

   $("#intro_reciever").slideDown("slow");
  
  },1000);

  setTimeout(function()
  {
    var x= document.getElementById('aud_intro_reciever');
        x.play();
   },1500);

  setTimeout(function()
  {

   document.getElementById("skpbtn_rec").style.visibility="hidden";
   document.getElementById("okbtn_rec").style.visibility="visible";
  
  },18000);

}


function reciver_hd()

{
    document.getElementById("reciver").style.visibility="hidden";
    document.getElementById("reciver2").style.visibility="visible";
}

function stp5_2hd()

{
    document.getElementById("step5_2").style.visibility="hidden";
}


function reciver_drop(event, droptarget)

{
  $(this).draggable('destroy');

  document.getElementById("tgt_reciver").style.visibility="hidden";
  document.getElementById("tgt_reciver").style.height="0px";
  document.getElementById("tgt_reciver").style.width="0px";

  document.getElementById("reciver2").style.height="48px";
  document.getElementById("reciver2").style.top="287px";
  document.getElementById("reciver2").style.left="198px";

  document.getElementById("tape4").style.visibility="hidden";

  setTimeout(function()
  {

   $("#step5_3").slideDown("slow");
   document.getElementById("recieverwires").style.animation="naza_pop 4s infinite";
  
  },1000);

  setTimeout(function()
  {
    var x= document.getElementById('aud_stp5_3');
        x.play();
   },1500);

   setTimeout(function()
          {

       document.getElementById("tb_recieverwires").style.visibility="hidden";

       document.getElementById("tgt_recieverwires").style.visibility="visible";
       document.getElementById("tgt_recieverwires").style.height="130px";
       document.getElementById("tgt_recieverwires").style.width="200px";

       $('#recieverwires2').draggable({
        revert: true,
        droptarget: '#tgt_recieverwires',
        drop: recieverwires2_drop
        });
    
     },4500);

}

function recieverwires_hd()

{
    document.getElementById("recieverwires").style.visibility="hidden";
    document.getElementById("recieverwires2").style.visibility="visible";
}

function stp5_3hd()

{
    document.getElementById("step5_3").style.visibility="hidden";
}


function recieverwires2_drop(event, droptarget)

{
  $(this).draggable('destroy');

  document.getElementById("tgt_recieverwires").style.visibility="hidden";
  document.getElementById("tgt_recieverwires").style.height="0px";
  document.getElementById("tgt_recieverwires").style.width="0px";

  document.getElementById("recieverwires2").style.height="116px";
  document.getElementById("recieverwires2").style.top="388px";
  document.getElementById("recieverwires2").style.left="263px";

  setTimeout(function()
    {

  $( "#zoomreciever" ).fadeIn(1000);

    },1000);

  setTimeout(function()
    {

  document.getElementById("svg_can5").style.visibility="visible";
  document.getElementById("handle1_can5").style.visibility="visible";
  document.getElementById("handle11_can5").style.visibility="visible";
  document.getElementById("red1").style.visibility="visible";
  document.getElementById("tb_handle1_can5").style.visibility="visible";
  document.getElementById("tb_handle11_can5").style.visibility="visible";

  document.getElementById("red3").style.visibility="visible";
  document.getElementById("handle2_can5").style.visibility="visible";
  document.getElementById("handle22_can5").style.visibility="visible";
  document.getElementById("tb_handle2_can5").style.visibility="visible";
  document.getElementById("tb_handle22_can5").style.visibility="visible";

  document.getElementById("red5").style.visibility="visible";
  document.getElementById("handle3_can5").style.visibility="visible";
  document.getElementById("handle33_can5").style.visibility="visible";
  document.getElementById("tb_handle3_can5").style.visibility="visible";
  document.getElementById("tb_handle33_can5").style.visibility="visible";

  document.getElementById("red7").style.visibility="visible";
  document.getElementById("handle4_can5").style.visibility="visible";
  document.getElementById("handle44_can5").style.visibility="visible";
  document.getElementById("tb_handle4_can5").style.visibility="visible";
  document.getElementById("tb_handle44_can5").style.visibility="visible";

  document.getElementById("red9").style.visibility="visible";
  document.getElementById("handle5_can5").style.visibility="visible";
  document.getElementById("handle55_can5").style.visibility="visible";
  document.getElementById("tb_handle5_can5").style.visibility="visible";
  document.getElementById("tb_handle55_can5").style.visibility="visible";

    },1500);

  setTimeout(function()
  {

   $("#step5_4").slideDown("slow");
  
  },2500);

  setTimeout(function()
  {
    var x= document.getElementById('aud_stp5_4');
        x.play();
   },3000);

  setTimeout(function()
          {

      document.getElementById("arowdwn1_can5").style.visibility="visible";
      document.getElementById("arowdwn1_can5").style.animation="arowdwn1_can5_shk 0.5s infinite";
      document.getElementById("arowdwn2_can5").style.visibility="visible";

      document.getElementById("handle1_div_can5").style.visibility="visible";
      document.getElementById("handle1_div_can5").style.height="40px";
      document.getElementById("handle1_div_can5").style.width="90px";

      document.getElementById("tb_handle1_can5").style.visibility="hidden";
      
          },9000);

}



// ===================================wire==============================


var targets5_1 = $("#handle1_div_can5");
var bezierWeight5 = 0.675;

var handles_can5 = document.querySelectorAll(".handle_can5");
var path_can5 = document.querySelector(".path_can5");

TweenLite.set(handles_can5[0], { x: 574, y: 326 });
TweenLite.set(handles_can5[1], { x: 439, y: 314 });

Draggable.create(handles_can5, {
  // onDrag: updatePath

  onDrag:function(e) {

  var x1 = handles_can5[0]._gsTransform.x;
  var y1 = handles_can5[0]._gsTransform.y;
  
  var x4 = handles_can5[1]._gsTransform.x;
  var y4 = handles_can5[1]._gsTransform.y;
  
  var dx = Math.abs(x4 - x1) * bezierWeight5;
  
  var x2 = x1 - dx;
  var x3 = x4 + dx;
  
  var data = `M${x1} ${y1} C ${x2} ${y1} ${x3} ${y4} ${x4} ${y4}`;
  
  path_can5.setAttribute("d", data);
   document.getElementById("step5_4").style.visibility="hidden";
   document.getElementById("red1").style.visibility="hidden";
   document.getElementById("arowdwn1_can5").style.visibility="hidden";
   
  for(var i=0; i<targets5_1.length;i++)

  {
    if (this.hitTest(targets5_1[i],"100%")) 

      { this.vars.onDragEnd=null; 
        this.disable();


document.getElementById("handle1_div_can5").style.visibility="hidden";
document.getElementById("handle1_div_can5").style.height="0px";
document.getElementById("handle1_div_can5").style.width="0px";

document.getElementById("arowdwn2_can5").style.visibility="hidden";

document.getElementById("svg_can5").style.visibility="hidden";
document.getElementById("handle1_can5").style.visibility="hidden";
document.getElementById("handle11_can5").style.visibility="hidden";

document.getElementById("svg1_can5").style.visibility="visible";
document.getElementById("handle1_1_can5").style.visibility="visible";

document.getElementById("red2").style.visibility="visible";

document.getElementById("handle11_div_can5").style.visibility="visible";
document.getElementById("handle11_div_can5").style.height="90px";
document.getElementById("handle11_div_can5").style.width="50px";

document.getElementById("tb_handle11_can5").style.visibility="hidden";

document.getElementById("arowdwn3_can5").style.visibility="visible";
document.getElementById("arowdwn3_can5").style.animation="arowdwn3_can5_shk 0.5s infinite";
document.getElementById("arowdwn4_can5").style.visibility="visible";

    }
  }
}
  
});



var targets5_11 = $("#handle11_div_can5");
var bezierWeight5 = 0.675;

var handles1_can5 = document.querySelectorAll(".handle1_can5");
var path1_can5 = document.querySelector(".path1_can5");

TweenLite.set(handles1_can5[0], { x: 587, y: 315 });
TweenLite.set(handles1_can5[1], { x: 371, y: 322 });

Draggable.create(handles1_can5, {
  // onDrag: updatePath

  onDrag:function(e) {

  var x1 = handles1_can5[0]._gsTransform.x;
  var y1 = handles1_can5[0]._gsTransform.y;
  
  var x4 = handles1_can5[1]._gsTransform.x;
  var y4 = handles1_can5[1]._gsTransform.y;
  
  var dx = Math.abs(x4 - x1) * bezierWeight5;
  
  var x2 = x1 - dx;
  var x3 = x4 + dx;
  
  var data = `M${x1} ${y1} C ${x2} ${y1} ${x3} ${y4} ${x4} ${y4}`;
  
  path1_can5.setAttribute("d", data);
   document.getElementById("arowdwn3_can5").style.visibility="hidden";
   document.getElementById("red2").style.visibility="hidden";
 
  for(var i=0; i<targets5_11.length;i++)

  {
    if (this.hitTest(targets5_11[i],"100%")) 

      { this.vars.onDragEnd=null; 
        this.disable();


document.getElementById("handle11_div_can5").style.visibility="hidden";
document.getElementById("handle11_div_can5").style.height="0px";
document.getElementById("handle11_div_can5").style.width="0px";

document.getElementById("ch1wire").style.visibility="visible";

document.getElementById("svg1_can5").style.visibility="hidden";
document.getElementById("handle1_1_can5").style.visibility="hidden";
document.getElementById("arowdwn4_can5").style.visibility="hidden";

document.getElementById("svg2_can5").style.visibility="visible";

setTimeout(function()
  {

   $("#step5_5").slideDown("slow");
  
  },500);

setTimeout(function()
  {
    var x= document.getElementById('aud_stp5_5');
        x.play();
   },1000);

setTimeout(function()
  {

document.getElementById("handle2_div_can5").style.visibility="visible";
document.getElementById("handle2_div_can5").style.height="55px";
document.getElementById("handle2_div_can5").style.width="90px";

document.getElementById("tb_handle2_can5").style.visibility="hidden";

document.getElementById("arowdwn5_can5").style.visibility="visible";
document.getElementById("arowdwn5_can5").style.animation="arowdwn5_can5_shk 0.5s infinite";
document.getElementById("arowdwn6_can5").style.visibility="visible";

},7000);

    }
  }
}
  
});


var targets5_2 = $("#handle2_div_can5");
var bezierWeight5 = 0.675;

var handles2_can5 = document.querySelectorAll(".handle2_can5");
var path2_can5 = document.querySelector(".path2_can5");

TweenLite.set(handles2_can5[0], { x: 584, y: 282 });
TweenLite.set(handles2_can5[1], { x: 446, y: 271 });

Draggable.create(handles2_can5, {
  // onDrag: updatePath

  onDrag:function(e) {

  var x1 = handles2_can5[0]._gsTransform.x;
  var y1 = handles2_can5[0]._gsTransform.y;
  
  var x4 = handles2_can5[1]._gsTransform.x;
  var y4 = handles2_can5[1]._gsTransform.y;
  
  var dx = Math.abs(x4 - x1) * bezierWeight5;
  
  var x2 = x1 - dx;
  var x3 = x4 + dx;
  
  var data = `M${x1} ${y1} C ${x2} ${y1} ${x3} ${y4} ${x4} ${y4}`;
  
  path2_can5.setAttribute("d", data);
   document.getElementById("arowdwn5_can5").style.visibility="hidden";
   document.getElementById("red3").style.visibility="hidden";
   document.getElementById("step5_5").style.visibility="hidden";
   
  for(var i=0; i<targets5_2.length;i++)

  {
    if (this.hitTest(targets5_2[i],"100%")) 

      { this.vars.onDragEnd=null; 
        this.disable();


document.getElementById("handle2_div_can5").style.visibility="hidden";
document.getElementById("handle2_div_can5").style.height="0px";
document.getElementById("handle2_div_can5").style.width="0px";

document.getElementById("arowdwn6_can5").style.visibility="hidden";

document.getElementById("svg2_can5").style.visibility="hidden";
document.getElementById("handle2_can5").style.visibility="hidden";
document.getElementById("handle22_can5").style.visibility="hidden";

document.getElementById("svg22_can5").style.visibility="visible";
document.getElementById("handle2_2_can5").style.visibility="visible";

document.getElementById("red4").style.visibility="visible";

document.getElementById("handle22_div_can5").style.visibility="visible";
document.getElementById("handle22_div_can5").style.height="100px";
document.getElementById("handle22_div_can5").style.width="55px";

document.getElementById("tb_handle22_can5").style.visibility="hidden";

document.getElementById("arowdwn7_can5").style.visibility="visible";
document.getElementById("arowdwn7_can5").style.animation="arowdwn7_can5_shk 0.5s infinite";
document.getElementById("arowdwn8_can5").style.visibility="visible";

    }
  }
}
  
});


var targets5_22 = $("#handle22_div_can5");
var bezierWeight5 = 0.675;

var handles22_can5 = document.querySelectorAll(".handle22_can5");
var path22_can5 = document.querySelector(".path22_can5");

TweenLite.set(handles22_can5[0], { x: 584, y: 282 });
TweenLite.set(handles22_can5[1], { x: 369, y: 301 });

Draggable.create(handles22_can5, {
  // onDrag: updatePath

  onDrag:function(e) {

  var x1 = handles22_can5[0]._gsTransform.x;
  var y1 = handles22_can5[0]._gsTransform.y;
  
  var x4 = handles22_can5[1]._gsTransform.x;
  var y4 = handles22_can5[1]._gsTransform.y;
  
  var dx = Math.abs(x4 - x1) * bezierWeight5;
  
  var x2 = x1 - dx;
  var x3 = x4 + dx;
  
  var data = `M${x1} ${y1} C ${x2} ${y1} ${x3} ${y4} ${x4} ${y4}`;
  
  path22_can5.setAttribute("d", data);
   document.getElementById("arowdwn7_can5").style.visibility="hidden";
   document.getElementById("red4").style.visibility="hidden";
  
  for(var i=0; i<targets5_22.length;i++)

  {
    if (this.hitTest(targets5_22[i],"100%")) 

      { this.vars.onDragEnd=null; 
        this.disable();


document.getElementById("handle22_div_can5").style.visibility="hidden";
document.getElementById("handle22_div_can5").style.height="0px";
document.getElementById("handle22_div_can5").style.width="0px";

document.getElementById("ch2wire").style.visibility="visible";

document.getElementById("svg22_can5").style.visibility="hidden";
document.getElementById("handle2_2_can5").style.visibility="hidden";
document.getElementById("arowdwn8_can5").style.visibility="hidden";

document.getElementById("svg3_can5").style.visibility="visible";

setTimeout(function()
  {

   $("#step5_6").slideDown("slow");
  
  },500);

setTimeout(function()
  {
    var x= document.getElementById('aud_stp5_6');
        x.play();
   },1000);

setTimeout(function()
  {

document.getElementById("handle3_div_can5").style.visibility="visible";
document.getElementById("handle3_div_can5").style.height="55px";
document.getElementById("handle3_div_can5").style.width="90px";

document.getElementById("tb_handle3_can5").style.visibility="hidden";

document.getElementById("arowdwn9_can5").style.visibility="visible";
document.getElementById("arowdwn9_can5").style.animation="arowdwn9_can5_shk 0.5s infinite";
document.getElementById("arowdwn10_can5").style.visibility="visible";

},8000);

    }
  }
}
  
});



var targets5_3 = $("#handle3_div_can5");
var bezierWeight5 = 0.675;

var handles3_can5 = document.querySelectorAll(".handle3_can5");
var path3_can5 = document.querySelector(".path3_can5");

TweenLite.set(handles3_can5[0], { x: 561, y: 250 });
TweenLite.set(handles3_can5[1], { x: 423, y: 239 });

Draggable.create(handles3_can5, {
  // onDrag: updatePath

  onDrag:function(e) {

  var x1 = handles3_can5[0]._gsTransform.x;
  var y1 = handles3_can5[0]._gsTransform.y;
  
  var x4 = handles3_can5[1]._gsTransform.x;
  var y4 = handles3_can5[1]._gsTransform.y;
  
  var dx = Math.abs(x4 - x1) * bezierWeight5;
  
  var x2 = x1 - dx;
  var x3 = x4 + dx;
  
  var data = `M${x1} ${y1} C ${x2} ${y1} ${x3} ${y4} ${x4} ${y4}`;
  
  path3_can5.setAttribute("d", data);
   document.getElementById("arowdwn9_can5").style.visibility="hidden";
   document.getElementById("red5").style.visibility="hidden";
   document.getElementById("step5_6").style.visibility="hidden";
   
  for(var i=0; i<targets5_3.length;i++)

  {
    if (this.hitTest(targets5_3[i],"100%")) 

      { this.vars.onDragEnd=null; 
        this.disable();


document.getElementById("handle3_div_can5").style.visibility="hidden";
document.getElementById("handle3_div_can5").style.height="0px";
document.getElementById("handle3_div_can5").style.width="0px";

document.getElementById("arowdwn10_can5").style.visibility="hidden";

document.getElementById("svg3_can5").style.visibility="hidden";
document.getElementById("handle3_can5").style.visibility="hidden";
document.getElementById("handle33_can5").style.visibility="hidden";

document.getElementById("svg33_can5").style.visibility="visible";
document.getElementById("handle3_3_can5").style.visibility="visible";

document.getElementById("red6").style.visibility="visible";

document.getElementById("handle33_div_can5").style.visibility="visible";
document.getElementById("handle33_div_can5").style.height="100px";
document.getElementById("handle33_div_can5").style.width="55px";

document.getElementById("tb_handle33_can5").style.visibility="hidden";

document.getElementById("arowdwn11_can5").style.visibility="visible";
document.getElementById("arowdwn11_can5").style.animation="arowdwn11_can5_shk 0.5s infinite";
document.getElementById("arowdwn12_can5").style.visibility="visible";

    }
  }
}
  
});



var targets5_33 = $("#handle33_div_can5");
var bezierWeight5 = 0.675;

var handles33_can5 = document.querySelectorAll(".handle33_can5");
var path33_can5 = document.querySelector(".path33_can5");

TweenLite.set(handles33_can5[0], { x: 555, y: 245 });
TweenLite.set(handles33_can5[1], { x: 369, y: 279 });

Draggable.create(handles33_can5, {
  // onDrag: updatePath

  onDrag:function(e) {

  var x1 = handles33_can5[0]._gsTransform.x;
  var y1 = handles33_can5[0]._gsTransform.y;
  
  var x4 = handles33_can5[1]._gsTransform.x;
  var y4 = handles33_can5[1]._gsTransform.y;
  
  var dx = Math.abs(x4 - x1) * bezierWeight5;
  
  var x2 = x1 - dx;
  var x3 = x4 + dx;
  
  var data = `M${x1} ${y1} C ${x2} ${y1} ${x3} ${y4} ${x4} ${y4}`;
  
  path33_can5.setAttribute("d", data);
   document.getElementById("red6").style.visibility="hidden";
   document.getElementById("arowdwn11_can5").style.visibility="hidden";
   
  for(var i=0; i<targets5_33.length;i++)

  {
    if (this.hitTest(targets5_33[i],"100%")) 

      { this.vars.onDragEnd=null; 
        this.disable();


document.getElementById("handle33_div_can5").style.visibility="hidden";
document.getElementById("handle33_div_can5").style.height="0px";
document.getElementById("handle33_div_can5").style.width="0px";

document.getElementById("ch3wire").style.visibility="visible";

document.getElementById("svg33_can5").style.visibility="hidden";
document.getElementById("handle3_3_can5").style.visibility="hidden";
document.getElementById("arowdwn12_can5").style.visibility="hidden";

document.getElementById("svg4_can5").style.visibility="visible";

setTimeout(function()
  {

   $("#step5_7").slideDown("slow");
  
  },500);

setTimeout(function()
  {
    var x= document.getElementById('aud_stp5_7');
        x.play();
   },1000);

setTimeout(function()
  {

document.getElementById("handle4_div_can5").style.visibility="visible";
document.getElementById("handle4_div_can5").style.height="55px";
document.getElementById("handle4_div_can5").style.width="90px";

document.getElementById("tb_handle4_can5").style.visibility="hidden";

document.getElementById("arowdwn13_can5").style.visibility="visible";
document.getElementById("arowdwn13_can5").style.animation="arowdwn13_can5_shk 0.5s infinite";
document.getElementById("arowdwn14_can5").style.visibility="visible";

},7000);

    }
  }
}
  
});


var targets5_4 = $("#handle4_div_can5");
var bezierWeight5 = 0.675;

var handles4_can5 = document.querySelectorAll(".handle4_can5");
var path4_can5 = document.querySelector(".path4_can5");

TweenLite.set(handles4_can5[0], { x: 617, y: 229 });
TweenLite.set(handles4_can5[1], { x: 482, y: 215 });

Draggable.create(handles4_can5, {
  // onDrag: updatePath

  onDrag:function(e) {

  var x1 = handles4_can5[0]._gsTransform.x;
  var y1 = handles4_can5[0]._gsTransform.y;
  
  var x4 = handles4_can5[1]._gsTransform.x;
  var y4 = handles4_can5[1]._gsTransform.y;
  
  var dx = Math.abs(x4 - x1) * bezierWeight5;
  
  var x2 = x1 - dx;
  var x3 = x4 + dx;
  
  var data = `M${x1} ${y1} C ${x2} ${y1} ${x3} ${y4} ${x4} ${y4}`;
  
  path4_can5.setAttribute("d", data);
   document.getElementById("arowdwn13_can5").style.visibility="hidden";
   document.getElementById("red7").style.visibility="hidden";
   document.getElementById("step5_7").style.visibility="hidden";
   
  for(var i=0; i<targets5_4.length;i++)

  {
    if (this.hitTest(targets5_4[i],"100%")) 

      { this.vars.onDragEnd=null; 
        this.disable();


document.getElementById("handle4_div_can5").style.visibility="hidden";
document.getElementById("handle4_div_can5").style.height="0px";
document.getElementById("handle4_div_can5").style.width="0px";

document.getElementById("arowdwn14_can5").style.visibility="hidden";

document.getElementById("svg4_can5").style.visibility="hidden";
document.getElementById("handle4_can5").style.visibility="hidden";
document.getElementById("handle44_can5").style.visibility="hidden";

document.getElementById("svg44_can5").style.visibility="visible";
document.getElementById("handle4_4_can5").style.visibility="visible";

document.getElementById("red8").style.visibility="visible";

document.getElementById("handle44_div_can5").style.visibility="visible";
document.getElementById("handle44_div_can5").style.height="100px";
document.getElementById("handle44_div_can5").style.width="55px";

document.getElementById("tb_handle44_can5").style.visibility="hidden";

document.getElementById("arowdwn15_can5").style.visibility="visible";
document.getElementById("arowdwn15_can5").style.animation="arowdwn15_can5_shk 0.5s infinite";
document.getElementById("arowdwn16_can5").style.visibility="visible";

    }
  }
}
  
});



var targets5_44 = $("#handle44_div_can5");
var bezierWeight5 = 0.675;

var handles44_can5 = document.querySelectorAll(".handle44_can5");
var path44_can5 = document.querySelector(".path44_can5");

TweenLite.set(handles44_can5[0], { x: 621, y: 227 });
TweenLite.set(handles44_can5[1], { x: 370, y: 261 });

Draggable.create(handles44_can5, {
  // onDrag: updatePath

  onDrag:function(e) {

  var x1 = handles44_can5[0]._gsTransform.x;
  var y1 = handles44_can5[0]._gsTransform.y;
  
  var x4 = handles44_can5[1]._gsTransform.x;
  var y4 = handles44_can5[1]._gsTransform.y;
  
  var dx = Math.abs(x4 - x1) * bezierWeight5;
  
  var x2 = x1 - dx;
  var x3 = x4 + dx;
  
  var data = `M${x1} ${y1} C ${x2} ${y1} ${x3} ${y4} ${x4} ${y4}`;
  
  path44_can5.setAttribute("d", data);
   document.getElementById("arowdwn15_can5").style.visibility="hidden";
   document.getElementById("red8").style.visibility="hidden";
 
  for(var i=0; i<targets5_44.length;i++)

  {
    if (this.hitTest(targets5_44[i],"100%")) 

      { this.vars.onDragEnd=null; 
        this.disable();


document.getElementById("handle44_div_can5").style.visibility="hidden";
document.getElementById("handle44_div_can5").style.height="0px";
document.getElementById("handle44_div_can5").style.width="0px";

document.getElementById("ch4wire").style.visibility="visible";

document.getElementById("svg44_can5").style.visibility="hidden";
document.getElementById("handle4_4_can5").style.visibility="hidden";
document.getElementById("arowdwn16_can5").style.visibility="hidden";

document.getElementById("svg5_can5").style.visibility="visible";

setTimeout(function()
  {

   $("#step5_8").slideDown("slow");
  
  },500);

setTimeout(function()
  {
    var x= document.getElementById('aud_stp5_8');
        x.play();
   },1000);

setTimeout(function()
  {

document.getElementById("handle5_div_can5").style.visibility="visible";
document.getElementById("handle5_div_can5").style.height="55px";
document.getElementById("handle5_div_can5").style.width="100px";

document.getElementById("tb_handle5_can5").style.visibility="hidden";

document.getElementById("arowdwn17_can5").style.visibility="visible";
document.getElementById("arowdwn17_can5").style.animation="arowdwn17_can5_shk 0.5s infinite";
document.getElementById("arowdwn18_can5").style.visibility="visible";

},8000);

    }
  }
}
  
});


var targets5_5 = $("#handle5_div_can5");
var bezierWeight5 = 0.675;

var handles5_can5 = document.querySelectorAll(".handle5_can5");
var path5_can5 = document.querySelector(".path5_can5");

TweenLite.set(handles5_can5[0], { x: 598, y: 203 });
TweenLite.set(handles5_can5[1], { x: 463, y: 190 });

Draggable.create(handles5_can5, {
  // onDrag: updatePath

  onDrag:function(e) {

  var x1 = handles5_can5[0]._gsTransform.x;
  var y1 = handles5_can5[0]._gsTransform.y;
  
  var x4 = handles5_can5[1]._gsTransform.x;
  var y4 = handles5_can5[1]._gsTransform.y;
  
  var dx = Math.abs(x4 - x1) * bezierWeight5;
  
  var x2 = x1 - dx;
  var x3 = x4 + dx;
  
  var data = `M${x1} ${y1} C ${x2} ${y1} ${x3} ${y4} ${x4} ${y4}`;
  
  path5_can5.setAttribute("d", data);
   document.getElementById("arowdwn17_can5").style.visibility="hidden";
   document.getElementById("red9").style.visibility="hidden";
   document.getElementById("step5_8").style.visibility="hidden";
   
  for(var i=0; i<targets5_5.length;i++)

  {
    if (this.hitTest(targets5_5[i],"100%")) 

      { this.vars.onDragEnd=null; 
        this.disable();


document.getElementById("handle5_div_can5").style.visibility="hidden";
document.getElementById("handle5_div_can5").style.height="0px";
document.getElementById("handle5_div_can5").style.width="0px";

document.getElementById("arowdwn18_can5").style.visibility="hidden";

document.getElementById("svg5_can5").style.visibility="hidden";
document.getElementById("handle5_can5").style.visibility="hidden";
document.getElementById("handle55_can5").style.visibility="hidden";

document.getElementById("svg55_can5").style.visibility="visible";
document.getElementById("handle5_5_can5").style.visibility="visible";

document.getElementById("red10").style.visibility="visible";

document.getElementById("handle55_div_can5").style.visibility="visible";
document.getElementById("handle55_div_can5").style.height="100px";
document.getElementById("handle55_div_can5").style.width="55px";

document.getElementById("tb_handle55_can5").style.visibility="hidden";

document.getElementById("arowdwn19_can5").style.visibility="visible";
document.getElementById("arowdwn19_can5").style.animation="arowdwn19_can5_shk 0.5s infinite";
document.getElementById("arowdwn20_can5").style.visibility="visible";

    }
  }
}
  
});


var targets5_55 = $("#handle55_div_can5");
var bezierWeight5 = 0.675;

var handles55_can5 = document.querySelectorAll(".handle55_can5");
var path55_can5 = document.querySelector(".path55_can5");

TweenLite.set(handles55_can5[0], { x: 600, y: 199 });
TweenLite.set(handles55_can5[1], { x: 372, y: 232 });

Draggable.create(handles55_can5, {
  // onDrag: updatePath

  onDrag:function(e) {

  var x1 = handles55_can5[0]._gsTransform.x;
  var y1 = handles55_can5[0]._gsTransform.y;
  
  var x4 = handles55_can5[1]._gsTransform.x;
  var y4 = handles55_can5[1]._gsTransform.y;
  
  var dx = Math.abs(x4 - x1) * bezierWeight5;
  
  var x2 = x1 - dx;
  var x3 = x4 + dx;
  
  var data = `M${x1} ${y1} C ${x2} ${y1} ${x3} ${y4} ${x4} ${y4}`;
  
  path55_can5.setAttribute("d", data);
   document.getElementById("arowdwn19_can5").style.visibility="hidden";
   document.getElementById("red10").style.visibility="hidden";
 
  for(var i=0; i<targets5_55.length;i++)

  {
    if (this.hitTest(targets5_55[i],"100%")) 

      { this.vars.onDragEnd=null; 
        this.disable();


document.getElementById("handle55_div_can5").style.visibility="hidden";
document.getElementById("handle55_div_can5").style.height="0px";
document.getElementById("handle55_div_can5").style.width="0px";

document.getElementById("ch5wire").style.visibility="visible";

document.getElementById("svg55_can5").style.visibility="hidden";
document.getElementById("handle5_5_can5").style.visibility="hidden";
document.getElementById("arowdwn20_can5").style.visibility="hidden";

setTimeout(function()
          {

      $( "#zoomreciever" ).fadeOut(1500);

      $( "#ch5wire" ).fadeOut(1500);
      $( "#ch4wire" ).fadeOut(1500);
      $( "#ch3wire" ).fadeOut(1500);
      $( "#ch2wire" ).fadeOut(1500);
      $( "#ch1wire" ).fadeOut(1500);
      $( "#recieverwires2" ).fadeOut(1500);
      $( "#wire4arm_pmufixcan5" ).fadeOut(1500);

      $( "#withrecieverwire" ).fadeIn(1500);
  
          },1000);

setTimeout(function()
  {

   $("#intro_gps").slideDown("slow");
  
  },3000);

setTimeout(function()
  {
    var x= document.getElementById('aud_intro_gps');
        x.play();
   },3500);

setTimeout(function()
  {

   document.getElementById("skpbtn_gps").style.visibility="hidden";
   document.getElementById("okbtn_gps").style.visibility="visible";
  
  },22000);


    }
  }
}
  
});


function gps_hd()

{
    document.getElementById("gps").style.visibility="hidden";
    document.getElementById("gps2").style.visibility="visible";
}

function step5_9hd()

{
    document.getElementById("step5_9").style.visibility="hidden";
}


function gps_drop(event, droptarget)

{
  $(this).draggable('destroy');

  document.getElementById("tgt_gps").style.visibility="hidden";
  document.getElementById("tgt_gps").style.height="0px";
  document.getElementById("tgt_gps").style.width="0px";

  document.getElementById("gps2").style.top="207px";
  document.getElementById("gps2").style.left="382px";

  setTimeout(function()
          {

       $( "#zoomgps" ).fadeIn(1000);
             
          },1000);

  setTimeout(function()
          {

       document.getElementById("svg6_can5").style.visibility="visible";
       document.getElementById("handle66_can5").style.visibility="visible";

       document.getElementById("gpswire1").style.visibility="visible";
       
          },1500);

setTimeout(function()
      {

   $("#step5_10").slideDown("slow");
   
      },2000);

setTimeout(function()
  {
    var x= document.getElementById('aud_stp5_10');
        x.play();
   },2500);

setTimeout(function()
      {

document.getElementById("arowdwn21_can5").style.visibility="visible";
document.getElementById("arowdwn21_can5").style.animation="arowdwn21_can5_shk 0.5s infinite";
document.getElementById("arowdwn22_can5").style.visibility="visible";

document.getElementById("handle6_div_can5").style.visibility="visible";
document.getElementById("handle6_div_can5").style.height="100px";
document.getElementById("handle6_div_can5").style.width="115px";

  },6500);
}



var targets6_1 = $("#handle6_div_can5");
var bezierWeight5 = 0.675;

var handles6_can5 = document.querySelectorAll(".handle6_can5");
var path6_can5 = document.querySelector(".path6_can5");

TweenLite.set(handles6_can5[1], { x: 457, y: 285 });
TweenLite.set(handles6_can5[0], { x: 397, y: 367 });

Draggable.create(handles6_can5, {
  // onDrag: updatePath

  onDrag:function(e) {

  var x1 = handles6_can5[1]._gsTransform.x;
  var y1 = handles6_can5[1]._gsTransform.y;
  
  var x4 = handles6_can5[0]._gsTransform.x;
  var y4 = handles6_can5[0]._gsTransform.y;
  
  var dx = Math.abs(x4 - x1) * bezierWeight5;
  
  var x2 = x1 - dx;
  var x3 = x4 + dx;
  
  var data = `M${x1} ${y1} C ${x2} ${y1} ${x3} ${y4} ${x4} ${y4}`;
  
  path6_can5.setAttribute("d", data);
   document.getElementById("gpswire1").style.visibility="hidden";
   document.getElementById("step5_10").style.visibility="hidden";
   document.getElementById("arowdwn21_can5").style.visibility="hidden";
   // document.getElementById("step3_3").style.visibility="hidden";
   
  for(var i=0; i<targets6_1.length;i++)

  {
    if (this.hitTest(targets6_1[i],"100%")) 

      { this.vars.onDragEnd=null; 
        this.disable();


document.getElementById("handle6_div_can5").style.visibility="hidden";
document.getElementById("handle6_div_can5").style.height="0px";
document.getElementById("handle6_div_can5").style.width="0px";

document.getElementById("svg6_can5").style.visibility="hidden";
document.getElementById("handle66_can5").style.visibility="hidden";
document.getElementById("arowdwn22_can5").style.visibility="hidden";

document.getElementById("gpswire2").style.visibility="visible";
document.getElementById("pmupingps").style.visibility="visible";

document.getElementById("gps2").style.left="403px";
document.getElementById("gps2").style.top="193px";

setTimeout(function()
    {

  $( "#zoomgps" ).fadeOut(1000);
  $( "#gpswire2" ).fadeOut(1000);
  $( "#pmupingps" ).fadeOut(1000);

    },1000);

setTimeout(function()
    {

  document.getElementById("nextButton5").style.visibility="visible";

    },2500);

    }
  }
}
  
});


function skp_rec()

{

const audio1 = document.querySelector("#aud_intro_reciever");
audio1.pause();
audio1.currentTime = 0;

 
  $( "#intro_reciever" ).fadeOut(1000);

  
   setTimeout(function()
  {

   $("#step5_2").slideDown("slow");
   document.getElementById("reciver").style.animation="naza_pop 4s infinite";
  
  },1500);

    setTimeout(function()
  {
    var x= document.getElementById('aud_stp5_2');
        x.play();
   },2000);

   setTimeout(function()
          {

       document.getElementById("tb_reciever").style.visibility="hidden";

       document.getElementById("tgt_reciver").style.visibility="visible";
       document.getElementById("tgt_reciver").style.height="130px";
       document.getElementById("tgt_reciver").style.width="225px";

       $('#reciver2').draggable({
        revert: true,
        droptarget: '#tgt_reciver',
        drop: reciver_drop
        });
    
     },6000);

}

function ok_rec()

{

 $( "#intro_reciever" ).fadeOut(1000);

  
   setTimeout(function()
  {

   $("#step5_2").slideDown("slow");
   document.getElementById("reciver").style.animation="naza_pop 4s infinite";
  
  },1500);

    setTimeout(function()
  {
    var x= document.getElementById('aud_stp5_2');
        x.play();
   },2000);

   setTimeout(function()
          {

       document.getElementById("tb_reciever").style.visibility="hidden";

       document.getElementById("tgt_reciver").style.visibility="visible";
       document.getElementById("tgt_reciver").style.height="130px";
       document.getElementById("tgt_reciver").style.width="225px";

       $('#reciver2').draggable({
        revert: true,
        droptarget: '#tgt_reciver',
        drop: reciver_drop
        });
    
     },6000);

}

function skp_gps()

{

const audio1 = document.querySelector("#aud_intro_gps");
audio1.pause();
audio1.currentTime = 0;

 
  $( "#intro_gps" ).fadeOut(1000);

setTimeout(function()
  {

   $("#step5_9").slideDown("slow");
   document.getElementById("gps").style.animation="naza_pop 4s infinite";
  
  },1000);

setTimeout(function()
  {
    var x= document.getElementById('aud_stp5_9');
        x.play();
   },1500);

   setTimeout(function()
          {

       document.getElementById("tb_gps").style.visibility="hidden";

       document.getElementById("tgt_gps").style.visibility="visible";
       document.getElementById("tgt_gps").style.height="170px";
       document.getElementById("tgt_gps").style.width="185px";

       $('#gps2').draggable({
        revert: true,
        droptarget: '#tgt_gps',
        drop: gps_drop
        });
    
     },4500);

}

function ok_gps()

{

 
  $( "#intro_gps" ).fadeOut(1000);

setTimeout(function()
  {

   $("#step5_9").slideDown("slow");
   document.getElementById("gps").style.animation="naza_pop 4s infinite";
  
  },1000);

setTimeout(function()
  {
    var x= document.getElementById('aud_stp5_9');
        x.play();
   },1500);

   setTimeout(function()
          {

       document.getElementById("tb_gps").style.visibility="hidden";

       document.getElementById("tgt_gps").style.visibility="visible";
       document.getElementById("tgt_gps").style.height="170px";
       document.getElementById("tgt_gps").style.width="185px";

       $('#gps2').draggable({
        revert: true,
        droptarget: '#tgt_gps',
        drop: gps_drop
        });
    
     },4500);

}
// =========================================CANVAS5==================


// =========================================CANVAS6==================

function navNext6()

{
  document.getElementById("canvas5").style.visibility="hidden";
  document.getElementById("canvas6").style.visibility="visible";
  document.getElementById("mrk_02").innerHTML=marks;
}


// ============================MCQ CANVAS6====================================



function ansshw_c6() {

            if(document.getElementById('optionB2').checked) {
                document.getElementById("ans_can6").innerHTML = document.getElementById("optionA2").value;
                document.getElementById("showans_can6").style.display="none";
                document.getElementById("mrk_02").innerHTML=marks;
                document.getElementById("nextButton6").style.visibility="visible";
            }
            else if(document.getElementById('optionD2').checked) {
              marks=marks+1;
              document.getElementById("ans_can6").style.color="green";
              document.getElementById("mrk_02").innerHTML=marks;
              // document.getElementById("mrk_00").style.visibility="hidden";
              document.getElementById("got_mrkcan6").style.visibility="visible";

              setTimeout(function()
              {

              var x= document.getElementById('aud_congo1mrk_can6');
              x.play();

              },300);

              document.getElementById("ans_can6").innerHTML = document.getElementById("optionB2").value;
              document.getElementById("showans_can6").style.display="none";
              document.getElementById("nextButton6").style.visibility="visible";

              }

            else if(document.getElementById('optionC2').checked) {
             
                document.getElementById("ans_can6").innerHTML = document.getElementById("optionC2").value;
                document.getElementById("showans_can6").style.display="none";
                document.getElementById("nextButton6").style.visibility="visible";
                document.getElementById("mrk_02").innerHTML=marks;
            }
            else if(document.getElementById('optionA2').checked) {
                document.getElementById("ans_can6").innerHTML = document.getElementById("optionA2").value;
                document.getElementById("showans_can6").style.display="none";
                document.getElementById("nextButton6").style.visibility="visible";
                document.getElementById("mrk_02").innerHTML=marks;
            }
            else {
                document.getElementById("ans_can6").innerHTML = "Select Option";
            }
        }
 

// ============================MCQ CANVAS6====================================


// =========================================CANVAS6==================

// =========================================CANVAS7==================

function navNext7()

{
  document.getElementById("canvas6").style.visibility="hidden";
  document.getElementById("canvas7").style.visibility="visible";

  setTimeout(function()
  {

   $("#intro_plate").slideDown("slow");
    
  },1000);

  setTimeout(function()
  {
    var x= document.getElementById('aud_introtopplate');
        x.play();
   },1500);

  setTimeout(function()
  {

   document.getElementById("skpbtn_tplate").style.visibility="hidden";
   document.getElementById("okbtn_tplate").style.visibility="visible";
    
  },9500);

    
}


function topplate_hd()

{
    document.getElementById("topplate").style.visibility="hidden";
    document.getElementById("topplate2").style.visibility="visible";
}

function stp7_1hd()

{
    document.getElementById("step7_1").style.visibility="hidden";
}

function topplate2_drop(event, droptarget)

{
  $(this).draggable('destroy');

  document.getElementById("tgt_topplate").style.visibility="hidden";
  document.getElementById("tgt_topplate").style.height="0px";
  document.getElementById("tgt_topplate").style.width="0px";

  document.getElementById("topplate2").style.top="234px";
  document.getElementById("topplate2").style.left="262px";

  setTimeout(function()
  {

   $( "#zoomtopplate" ).fadeIn(1000);
    
  },1000);

  setTimeout(function()
          {

       $("#step7_2").slideDown("slow");

       document.getElementById("nut1").style.animation="naza_pop2 2s infinite";
      
          },2000);

  setTimeout(function()
  {
    var x= document.getElementById('aud_stp7_2');
        x.play();
   },2500);

  setTimeout(function()
          {

       document.getElementById("tb_nut1").style.visibility="hidden";

       document.getElementById("tgt_nut1").style.visibility="visible";
       document.getElementById("tgt_nut1").style.height="88px";
       document.getElementById("tgt_nut1").style.width="85px";

       $('#nut11').draggable({
        revert: true,
        droptarget: '#tgt_nut1',
        drop: nut1_drop
        });
    
     },6500);

}

function nut1_hd()

{
    document.getElementById("nut1").style.visibility="hidden";
    document.getElementById("nut11").style.visibility="visible";
}

function stp7_2hd()

{
    document.getElementById("step7_2").style.visibility="hidden";
}

function nut1_drop(event, droptarget)

{
  $(this).draggable('destroy');

  document.getElementById("tgt_nut1").style.visibility="hidden";
  document.getElementById("tgt_nut1").style.height="0px";
  document.getElementById("tgt_nut1").style.width="0px";

  document.getElementById("nut11").style.visibility="hidden";
  document.getElementById("nutf1").style.visibility="visible";


       document.getElementById("nut2").style.animation="naza_pop2 2s infinite";
     

  setTimeout(function()
          {

       document.getElementById("tb_nut2").style.visibility="hidden";

       document.getElementById("tgt_nut2").style.visibility="visible";
       document.getElementById("tgt_nut2").style.height="88px";
       document.getElementById("tgt_nut2").style.width="85px";

       $('#nut22').draggable({
        revert: true,
        droptarget: '#tgt_nut2',
        drop: nut2_drop
        });
    
     },1000);

}


function nut2_hd()

{
    document.getElementById("nut2").style.visibility="hidden";
    document.getElementById("nut22").style.visibility="visible";
}


function nut2_drop(event, droptarget)

{
  $(this).draggable('destroy');

  document.getElementById("tgt_nut2").style.visibility="hidden";
  document.getElementById("tgt_nut2").style.height="0px";
  document.getElementById("tgt_nut2").style.width="0px";

  document.getElementById("nut22").style.visibility="hidden";
  document.getElementById("nutf2").style.visibility="visible";


       document.getElementById("nut3").style.animation="naza_pop2 2s infinite";
     

  setTimeout(function()
          {

       document.getElementById("tb_nut3").style.visibility="hidden";

       document.getElementById("tgt_nut3").style.visibility="visible";
       document.getElementById("tgt_nut3").style.height="88px";
       document.getElementById("tgt_nut3").style.width="85px";

       $('#nut33').draggable({
        revert: true,
        droptarget: '#tgt_nut3',
        drop: nut3_drop
        });
    
     },1000);

}

function nut3_hd()

{
    document.getElementById("nut3").style.visibility="hidden";
    document.getElementById("nut33").style.visibility="visible";
}

function nut3_drop(event, droptarget)

{
  $(this).draggable('destroy');

  document.getElementById("tgt_nut3").style.visibility="hidden";
  document.getElementById("tgt_nut3").style.height="0px";
  document.getElementById("tgt_nut3").style.width="0px";

  document.getElementById("nut33").style.visibility="hidden";
  document.getElementById("nutf3").style.visibility="visible";


       document.getElementById("nut4").style.animation="naza_pop2 2s infinite";
     

  setTimeout(function()
          {

       document.getElementById("tb_nut4").style.visibility="hidden";

       document.getElementById("tgt_nut4").style.visibility="visible";
       document.getElementById("tgt_nut4").style.height="88px";
       document.getElementById("tgt_nut4").style.width="85px";

       $('#nut44').draggable({
        revert: true,
        droptarget: '#tgt_nut4',
        drop: nut4_drop
        });
    
     },1000);

}

function nut4_hd()

{
    document.getElementById("nut4").style.visibility="hidden";
    document.getElementById("nut44").style.visibility="visible";
}


function nut4_drop(event, droptarget)

{
  $(this).draggable('destroy');

  document.getElementById("tgt_nut4").style.visibility="hidden";
  document.getElementById("tgt_nut4").style.height="0px";
  document.getElementById("tgt_nut4").style.width="0px";

  document.getElementById("nut44").style.visibility="hidden";
  document.getElementById("nutf4").style.visibility="visible";

  setTimeout(function()
          {

       $("#step7_3").slideDown("slow");

       document.getElementById("lnkey").style.animation="naza_pop3 2s infinite";
      
          },1000);

  setTimeout(function()
  {
    var x= document.getElementById('aud_stp7_3');
        x.play();
   },1500);


  setTimeout(function()
          {

       document.getElementById("tb_lnkey").style.visibility="hidden";

       document.getElementById("tgt_lnkey").style.visibility="visible";
       document.getElementById("tgt_lnkey").style.height="88px";
       document.getElementById("tgt_lnkey").style.width="175px";

       $('#lnkey2').draggable({
        revert: true,
        droptarget: '#tgt_lnkey',
        drop: lnkey_drop
        });
    
     },5500);

}

function lnkey_hd()

{
    document.getElementById("lnkey").style.visibility="hidden";
    document.getElementById("lnkey2").style.visibility="visible";
}

function lnkey_drop(event, droptarget)

{
  $(this).draggable('destroy');

  document.getElementById("tgt_lnkey").style.visibility="hidden";
  document.getElementById("tgt_lnkey").style.height="0px";
  document.getElementById("tgt_lnkey").style.width="0px";

  document.getElementById("lnkey2").style.visibility="hidden";
  document.getElementById("lnkeyhand").style.visibility="visible";
  document.getElementById("lnkeyhand").style.animation="lnkeyhand_1ro 2s forwards";

   setTimeout(function()
          {

       document.getElementById("lnkeyhand").style.animation="lnkeyhand_1mo 0.5s forwards";
      
          },2000); 

   setTimeout(function()
          {

       document.getElementById("lnkeyhand").style.animation="lnkeyhand_2ro 2s forwards";
      
          },2500);

    setTimeout(function()
          {

       document.getElementById("lnkeyhand").style.animation="lnkeyhand_2mo 0.5s forwards";
      
          },4500);

   setTimeout(function()
          {

       document.getElementById("lnkeyhand").style.animation="lnkeyhand_3ro 2s forwards";
      
          },5000);

    setTimeout(function()
          {

       document.getElementById("lnkeyhand").style.animation="lnkeyhand_3mo 0.5s forwards";
      
          },7000); 

    setTimeout(function()
          {

       document.getElementById("lnkeyhand").style.animation="lnkeyhand_4ro 2s forwards";
      
          },7500);

    setTimeout(function()
          {

       document.getElementById("lnkeyhand").style.animation="lnkeyhand_bck 1.5s forwards";
      
          },9500); 

    setTimeout(function()
          {

  document.getElementById("lnkeyhand").style.visibility="hidden";
  document.getElementById("lnkey3").style.visibility="visible"; 

          },11000); 

    setTimeout(function()
        {

        $("#note_topplate").slideDown("slow");    
    
        },12000);

    setTimeout(function()
  {
    var x= document.getElementById('aud_notetopplate');
        x.play();
   },13000);

    setTimeout(function()
        {

        document.getElementById("nextButton7").style.visibility="visible";    
    
        },18000);

}


function step7_3hd()

{
    document.getElementById("step7_3").style.visibility="hidden";

}


function skp_tplate()

{

const audio1 = document.querySelector("#aud_introtopplate");
audio1.pause();
audio1.currentTime = 0;

   $( "#intro_plate" ).fadeOut(1000);
    
  setTimeout(function()
          {

       $("#step7_1").slideDown("slow");

       document.getElementById("topplate").style.animation="naza_pop 4s infinite";
      
          },2000);

  setTimeout(function()
  {
    var x= document.getElementById('aud_stp7_1');
        x.play();
   },2500);


      setTimeout(function()
          {

       document.getElementById("tb_topplate").style.visibility="hidden";

       document.getElementById("tgt_topplate").style.visibility="visible";
       document.getElementById("tgt_topplate").style.height="178px";
       document.getElementById("tgt_topplate").style.width="175px";

       $('#topplate2').draggable({
        revert: true,
        droptarget: '#tgt_topplate',
        drop: topplate2_drop
        });
    
     },4500);

}

function ok_tplate()

{

 $( "#intro_plate" ).fadeOut(1000);
    
  setTimeout(function()
          {

       $("#step7_1").slideDown("slow");

       document.getElementById("topplate").style.animation="naza_pop 4s infinite";
      
          },2000);

  setTimeout(function()
  {
    var x= document.getElementById('aud_stp7_1');
        x.play();
   },2500);


      setTimeout(function()
          {

       document.getElementById("tb_topplate").style.visibility="hidden";

       document.getElementById("tgt_topplate").style.visibility="visible";
       document.getElementById("tgt_topplate").style.height="178px";
       document.getElementById("tgt_topplate").style.width="175px";

       $('#topplate2').draggable({
        revert: true,
        droptarget: '#tgt_topplate',
        drop: topplate2_drop
        });
    
     },4500);

}

// =========================================CANVAS7==================


// =========================================CANVAS8==================

function navNext8()

{
  document.getElementById("canvas7").style.visibility="hidden";
  document.getElementById("canvas8").style.visibility="visible";
  document.getElementById("mrk_03").innerHTML=marks;
}


// ============================MCQ CANVAS8====================================



function ansshw_c8() {

            if(document.getElementById('optionB3').checked) {
                document.getElementById("ans_can8").innerHTML = document.getElementById("optionC3").value;
                document.getElementById("showans_can8").style.display="none";
                document.getElementById("mrk_03").innerHTML=marks;
                document.getElementById("nextButton8").style.visibility="visible";
            }
            else if(document.getElementById('optionC3').checked) {
              marks=marks+1;
              document.getElementById("ans_can8").style.color="green";
              document.getElementById("mrk_03").innerHTML=marks;
              // document.getElementById("mrk_00").style.visibility="hidden";
              document.getElementById("got_mrkcan8").style.visibility="visible";

              setTimeout(function()
              {

              var x= document.getElementById('aud_congo1mrk_can8');
              x.play();

              },300);

              document.getElementById("ans_can8").innerHTML = document.getElementById("optionB3").value;
              document.getElementById("showans_can8").style.display="none";
              document.getElementById("nextButton8").style.visibility="visible";

              }

            else if(document.getElementById('optionD3').checked) {
             
                document.getElementById("ans_can8").innerHTML = document.getElementById("optionD3").value;
                document.getElementById("showans_can8").style.display="none";
                document.getElementById("nextButton8").style.visibility="visible";
                document.getElementById("mrk_03").innerHTML=marks;
            }
            else if(document.getElementById('optionA3').checked) {
                document.getElementById("ans_can8").innerHTML = document.getElementById("optionA3").value;
                document.getElementById("showans_can8").style.display="none";
                document.getElementById("nextButton8").style.visibility="visible";
                document.getElementById("mrk_03").innerHTML=marks;
            }
            else {
                document.getElementById("ans_can8").innerHTML = "Select Option";
            }
        }
 

// ============================MCQ CANVAS8====================================


// =========================================CANVAS8==================


// =========================================CANVAS9==================

function navNext9()

{
  document.getElementById("canvas8").style.visibility="hidden";
  document.getElementById("canvas9").style.visibility="visible";

  setTimeout(function()
          {

       $("#step9_1").slideDown("slow");
      
          },1000);

  setTimeout(function()
  {
    var x= document.getElementById('aud_stp9_1');
        x.play();
   },1500);

  setTimeout(function()
          {

       document.getElementById("tb_platecan9").style.visibility="visible";
       document.getElementById("arowdwn9_1").style.visibility="visible";
       document.getElementById("arowdwn9_1").style.animation="arowdwn3_1shk 0.5s infinite";
      
          },3500);
  
}


function can9plate_flip()

{
    
    document.getElementById("tb_platecan9").style.visibility="hidden";
    document.getElementById("arowdwn9_1").style.visibility="hidden";
    document.getElementById("step9_1").style.visibility="hidden";
    document.getElementById("platecan9").style.animation="platecan9_flip 1s forwards";

    setTimeout(function()
          {

       document.getElementById("platecan9").style.visibility="hidden";
       document.getElementById("plateforgear").style.visibility="visible"; 
       document.getElementById("plateforgear").style.animation="plateforgear_flip 1s forwards";
    
          },1000);

    setTimeout(function()
          {

       $("#intro_gear").slideDown("slow");

         },3500);

    setTimeout(function()
  {
    var x= document.getElementById('aud_introgear');
        x.play();
   },4000);

    setTimeout(function()
  {

   document.getElementById("skpbtn_gear").style.visibility="hidden";
   document.getElementById("okbtn_gear").style.visibility="visible"; 

   },11000);
  
}


function gear1_hd()

{
    document.getElementById("gear1").style.visibility="hidden";
    document.getElementById("gear2").style.visibility="visible";

}

function step9_2hd()

{
    document.getElementById("step9_2").style.visibility="hidden";

}

function gear2_drop(event, droptarget)

{
  $(this).draggable('destroy');

  document.getElementById("tgt_gear1").style.visibility="hidden";
  document.getElementById("tgt_gear1").style.height="0px";
  document.getElementById("tgt_gear1").style.width="0px";

  document.getElementById("gear2").style.visibility="hidden";
  document.getElementById("gear11").style.visibility="visible";

  setTimeout(function()
          {

       $( "#zoomcan9" ).fadeIn(1000);
       
         },500);

 

  setTimeout(function()
          {

       $("#step9_3").slideDown("slow");
       document.getElementById("nut1_can9").style.animation="naza_pop2 2s infinite";

         },2000);

  setTimeout(function()
  {
    var x= document.getElementById('aud_stp9_3');
        x.play();
   },2500);

  setTimeout(function()
          {

       document.getElementById("tb_nut1_can9").style.visibility="hidden";

       document.getElementById("tgt_nut1_can9").style.visibility="visible";
       document.getElementById("tgt_nut1_can9").style.height="88px";
       document.getElementById("tgt_nut1_can9").style.width="85px";

       $('#nut11_can9').draggable({
        revert: true,
        droptarget: '#tgt_nut1_can9',
        drop: nut1_can9_drop
        });
    
     },5500);

}

function nut1_hd_can9()

{
    document.getElementById("nut1_can9").style.visibility="hidden";
    document.getElementById("nut11_can9").style.visibility="visible";

}

function stp9_3hd()

{
    document.getElementById("step9_3").style.visibility="hidden";

}

function nut1_can9_drop(event, droptarget)

{
  $(this).draggable('destroy');

  document.getElementById("tgt_nut1_can9").style.visibility="hidden";
  document.getElementById("tgt_nut1_can9").style.height="0px";
  document.getElementById("tgt_nut1_can9").style.width="0px";

  document.getElementById("nut11_can9").style.visibility="hidden";
  document.getElementById("nutf1_can9").style.visibility="visible";

 document.getElementById("nut2_can9").style.animation="naza_pop2 2s infinite";
     

  setTimeout(function()
          {

       document.getElementById("tb_nut2_can9").style.visibility="hidden";

       document.getElementById("tgt_nut2_can9").style.visibility="visible";
       document.getElementById("tgt_nut2_can9").style.height="88px";
       document.getElementById("tgt_nut2_can9").style.width="85px";

       $('#nut22_can9').draggable({
        revert: true,
        droptarget: '#tgt_nut2_can9',
        drop: nut2_drop_can9
        });
    
     },1000);

}



function nut2_drop_can9(event, droptarget)

{
  $(this).draggable('destroy');

  document.getElementById("tgt_nut2_can9").style.visibility="hidden";
  document.getElementById("tgt_nut2_can9").style.height="0px";
  document.getElementById("tgt_nut2_can9").style.width="0px";

  document.getElementById("nut22_can9").style.visibility="hidden";
  document.getElementById("nutf2_can9").style.visibility="visible";

  setTimeout(function()
          {

       $("#step9_4").slideDown("slow");
       document.getElementById("lnkey_can9").style.animation="naza_pop3 2s infinite";

         },1000);

  setTimeout(function()
  {
    var x= document.getElementById('aud_stp9_4');
        x.play();
   },1500);
  

  setTimeout(function()
          {

       document.getElementById("tb_lnkey_can9").style.visibility="hidden";

       document.getElementById("tgt_lnkey_can9").style.visibility="visible";
       document.getElementById("tgt_lnkey_can9").style.height="110px";
       document.getElementById("tgt_lnkey_can9").style.width="185px";

       $('#lnkey2_can9').draggable({
        revert: true,
        droptarget: '#tgt_lnkey_can9',
        drop: lnkey_can9drop
        });
    
     },5500);

}


function lnkey_can9drop(event, droptarget)

{
  $(this).draggable('destroy');

  document.getElementById("tgt_lnkey_can9").style.visibility="hidden";
  document.getElementById("tgt_lnkey_can9").style.height="0px";
  document.getElementById("tgt_lnkey_can9").style.width="0px";

  document.getElementById("lnkey2_can9").style.visibility="hidden";
  document.getElementById("lnkeyhand_can9").style.visibility="visible";

  document.getElementById("lnkeyhand_can9").style.animation="lnkeyhand_1ro_can9 2s forwards";
      
    setTimeout(function()
          {

  document.getElementById("lnkeyhand_can9").style.animation="lnkeyhand_1mo_can9 0.5s forwards";
      
          },2000);

    setTimeout(function()
          {

  document.getElementById("lnkeyhand_can9").style.animation="lnkeyhand_2ro_can9 2s forwards";
      
          },2500);

    setTimeout(function()
          {

  document.getElementById("lnkeyhand_can9").style.animation="lnkeyhand_bck_can9 1s forwards";
      
          },4500);

    setTimeout(function()
          {

      document.getElementById("lnkeyhand_can9").style.visibility="hidden";
      document.getElementById("lnkey3_can9").style.visibility="visible";  

          },5500);

    setTimeout(function()
          {

       $("#note_gear").slideDown("slow");

         },6500);

    setTimeout(function()
  {
    var x= document.getElementById('aud_notegear');
        x.play();
   },7500);

    setTimeout(function()
          {

       document.getElementById("nextButton9").style.visibility="visible"; 

         },11500);

}

function nut2_hd_can9()

{
    document.getElementById("nut2_can9").style.visibility="hidden";
    document.getElementById("nut22_can9").style.visibility="visible";

}

function lnkey_hd_can9()

{
    document.getElementById("lnkey_can9").style.visibility="hidden";
    document.getElementById("lnkey2_can9").style.visibility="visible";

}

function step9_4hd()

{
    document.getElementById("step9_4").style.visibility="hidden";

}

function skp_gear()

{

const audio1 = document.querySelector("#aud_introgear");
audio1.pause();
audio1.currentTime = 0;

       $( "#intro_gear" ).fadeOut(1000);
       
      setTimeout(function()
          {

       $("#step9_2").slideDown("slow");
       document.getElementById("gear1").style.animation="naza_pop 4s infinite";

         },1000);

     setTimeout(function()
  {
    var x= document.getElementById('aud_stp9_2');
        x.play();
   },2000);

  setTimeout(function()
          {

       document.getElementById("tb_gear1").style.visibility="hidden";

       document.getElementById("tgt_gear1").style.visibility="visible";
       document.getElementById("tgt_gear1").style.height="250px";
       document.getElementById("tgt_gear1").style.width="325px";

       $('#gear2').draggable({
        revert: true,
        droptarget: '#tgt_gear1',
        drop: gear2_drop
        });
    
     },5000);

}

function ok_gear()

{

 $( "#intro_gear" ).fadeOut(1000);
       
      setTimeout(function()
          {

       $("#step9_2").slideDown("slow");
       document.getElementById("gear1").style.animation="naza_pop 4s infinite";

         },1000);

     setTimeout(function()
  {
    var x= document.getElementById('aud_stp9_2');
        x.play();
   },2000);

  setTimeout(function()
          {

       document.getElementById("tb_gear1").style.visibility="hidden";

       document.getElementById("tgt_gear1").style.visibility="visible";
       document.getElementById("tgt_gear1").style.height="250px";
       document.getElementById("tgt_gear1").style.width="325px";

       $('#gear2').draggable({
        revert: true,
        droptarget: '#tgt_gear1',
        drop: gear2_drop
        });
    
     },5000);

}


// =========================================CANVAS9==================

// =========================================CANVAS10==================

function navNext10()

{
  document.getElementById("canvas9").style.visibility="hidden";
  document.getElementById("canvas10").style.visibility="visible";
  document.getElementById("mrk_04").innerHTML=marks;
}


// ============================MCQ CANVAS10====================================



function ansshw_c10() {

            if(document.getElementById('optionB4').checked) {
                document.getElementById("ans_can10").innerHTML = document.getElementById("optionC4").value;
                document.getElementById("showans_can10").style.display="none";
                document.getElementById("mrk_04").innerHTML=marks;
                document.getElementById("nextButton10").style.visibility="visible";
            }
            else if(document.getElementById('optionC4').checked) {
              marks=marks+1;
              document.getElementById("ans_can10").style.color="green";
              document.getElementById("mrk_04").innerHTML=marks;
              // document.getElementById("mrk_00").style.visibility="hidden";
              document.getElementById("got_mrkcan10").style.visibility="visible";

              setTimeout(function()
              {

              var x= document.getElementById('aud_congo1mrk_can10');
              x.play();

              },300);

              document.getElementById("ans_can10").innerHTML = document.getElementById("optionB4").value;
              document.getElementById("showans_can10").style.display="none";
              document.getElementById("nextButton10").style.visibility="visible";

              }

            else if(document.getElementById('optionD4').checked) {
             
                document.getElementById("ans_can10").innerHTML = document.getElementById("optionD4").value;
                document.getElementById("showans_can10").style.display="none";
                document.getElementById("nextButton10").style.visibility="visible";
                document.getElementById("mrk_04").innerHTML=marks;
            }
            else if(document.getElementById('optionA4').checked) {
                document.getElementById("ans_can10").innerHTML = document.getElementById("optionA4").value;
                document.getElementById("showans_can10").style.display="none";
                document.getElementById("nextButton10").style.visibility="visible";
                document.getElementById("mrk_04").innerHTML=marks;
            }
            else {
                document.getElementById("ans_can10").innerHTML = "Select Option";
            }
        }
 

// ============================MCQ CANVAS10====================================


// =========================================CANVAS10==================

// =========================================CANVAS11==================

function navNext11()

{
  document.getElementById("canvas10").style.visibility="hidden";
  document.getElementById("canvas11").style.visibility="visible";

   setTimeout(function()
          {

       $("#step11_1").slideDown("slow");
      
          },1000);

   setTimeout(function()
  {
    var x= document.getElementById('aud_stp11_1');
        x.play();
   },1500);

  setTimeout(function()
          {

       document.getElementById("tb_platecan11").style.visibility="visible";
       document.getElementById("arowdwn11_1").style.visibility="visible";
       document.getElementById("arowdwn11_1").style.animation="arowdwn3_1shk 0.5s infinite";
      
          },4500);
}


function can11plate_flip()

{
    
    document.getElementById("tb_platecan11").style.visibility="hidden";
    document.getElementById("arowdwn11_1").style.visibility="hidden";
    document.getElementById("step11_1").style.visibility="hidden";
    document.getElementById("platecan10").style.animation="platecan9_flip 1s forwards";

    setTimeout(function()
          {

       document.getElementById("platecan10").style.visibility="hidden";
       document.getElementById("platecan10_gear").style.visibility="visible"; 
       document.getElementById("platecan10_gear").style.animation="plateforgear_flip 1s forwards";
    
          },1000);

    setTimeout(function()
          {

       $("#intro_propeller").slideDown("slow");

         },3500);

    setTimeout(function()
  {
    var x= document.getElementById('aud_intropro');
        x.play();
   },4000);

    setTimeout(function()
          {

      document.getElementById("skpbtn_pro").style.visibility="hidden";
      document.getElementById("okbtn_pro").style.visibility="visible"; 

         },19000);
    
}


function pro_can11hd()

{
    document.getElementById("pro_can11").style.visibility="hidden";
    document.getElementById("pro2_can11").style.visibility="visible";

}

function step11_2hd()

{
    document.getElementById("step11_2").style.visibility="hidden";

}

function pro2_can11_drop(event, droptarget)

{
  $(this).draggable('destroy');

  document.getElementById("tgt_pro_can11").style.visibility="hidden";
  document.getElementById("tgt_pro_can11").style.height="0px";
  document.getElementById("tgt_pro_can11").style.width="0px";

  document.getElementById("pro2_can11").style.top="59px";
  document.getElementById("pro2_can11").style.left="359px";
  document.getElementById("pro2_can11").style.transform="rotate(20deg)";

  setTimeout(function()
          {

      $( "#zoompro" ).fadeIn(1000);

         },1000);

  setTimeout(function()
          {

       $("#step11_3").slideDown("slow");
       document.getElementById("probolt").style.animation="naza_pop2 4s infinite";

         },2000);

  setTimeout(function()
  {
    var x= document.getElementById('aud_stp11_3');
        x.play();
   },2500);

  setTimeout(function()
          {

       document.getElementById("tb_probolt").style.visibility="hidden";

       document.getElementById("tgt_probolt").style.visibility="visible";
       document.getElementById("tgt_probolt").style.height="141px";
       document.getElementById("tgt_probolt").style.width="105px";

       $('#probolt2').draggable({
        revert: true,
        droptarget: '#tgt_probolt',
        drop: probolt2_drop
        });
    
     },5500);

}

function probolt_hd()

{
    document.getElementById("probolt").style.visibility="hidden";
    document.getElementById("probolt2").style.visibility="visible";

}

function stp11_3hd()

{
    document.getElementById("step11_3").style.visibility="hidden";

}


function probolt2_drop(event, droptarget)

{
  $(this).draggable('destroy');

  document.getElementById("tgt_probolt").style.visibility="hidden";
  document.getElementById("tgt_probolt").style.height="0px";
  document.getElementById("tgt_probolt").style.width="0px";

  document.getElementById("probolt2").style.visibility="hidden";
  document.getElementById("probolts").style.visibility="visible";

   setTimeout(function()
          {

       $("#step11_4").slideDown("slow");
       document.getElementById("keybolt").style.animation="naza_pop4 4s infinite";

         },1000);

   setTimeout(function()
  {
    var x= document.getElementById('aud_stp11_4');
        x.play();
   },1500);

   setTimeout(function()
          {

       document.getElementById("tb_keybolt").style.visibility="hidden";

       document.getElementById("tgt_keybolt").style.visibility="visible";
       document.getElementById("tgt_keybolt").style.height="141px";
       document.getElementById("tgt_keybolt").style.width="255px";

       $('#keybolt2').draggable({
        revert: true,
        droptarget: '#tgt_keybolt',
        drop: keybolt2_drop
        });
    
     },5500);

}

function keybolt_hd()

{
    document.getElementById("keybolt").style.visibility="hidden";
    document.getElementById("keybolt2").style.visibility="visible";

}

function stp11_4hd()

{
    document.getElementById("step11_4").style.visibility="hidden";

}

function keybolt2_drop(event, droptarget)

{
  $(this).draggable('destroy');

  document.getElementById("tgt_keybolt").style.visibility="hidden";
  document.getElementById("tgt_keybolt").style.height="0px";
  document.getElementById("tgt_keybolt").style.width="0px";

  document.getElementById("keybolthand").style.visibility="visible";
  document.getElementById("keybolt2").style.visibility="hidden";
  document.getElementById("keybolthand").style.animation="keybolthand_ro 2s forwards";
      
    setTimeout(function()
          {

  document.getElementById("keybolthand").style.animation="keybolthand_bck 1s forwards";
      
          },2000);

    setTimeout(function()
          {

document.getElementById("keybolthand").style.visibility="hidden";
document.getElementById("keybolt3").style.visibility="visible";

          },3000);

    setTimeout(function()
          {

       $("#note_pro").slideDown("slow");
      
         },4000);

    setTimeout(function()
  {
    var x= document.getElementById('aud_notepro');
        x.play();
   },4500);

setTimeout(function()
          {

document.getElementById("nextButton11").style.visibility="visible";

          },8500);

}


function skp_pro()

{

const audio1 = document.querySelector("#aud_intropro");
audio1.pause();
audio1.currentTime = 0;

      $( "#intro_propeller" ).fadeOut(1000);

      setTimeout(function()
          {

       $("#step11_2").slideDown("slow");
       document.getElementById("pro_can11").style.animation="naza_pop4 4s infinite";

         },2000);

       setTimeout(function()
  {
    var x= document.getElementById('aud_stp11_2');
        x.play();
   },2500);

  
  setTimeout(function()
          {

       document.getElementById("tb_pro_can11").style.visibility="hidden";

       document.getElementById("tgt_pro_can11").style.visibility="visible";
       document.getElementById("tgt_pro_can11").style.height="170px";
       document.getElementById("tgt_pro_can11").style.width="400px";

       $('#pro2_can11').draggable({
        revert: true,
        droptarget: '#tgt_pro_can11',
        drop: pro2_can11_drop
        });
    
     },4500);
}

function ok_pro()

{

  $( "#intro_propeller" ).fadeOut(1000);

      setTimeout(function()
          {

       $("#step11_2").slideDown("slow");
       document.getElementById("pro_can11").style.animation="naza_pop4 4s infinite";

         },2000);

       setTimeout(function()
  {
    var x= document.getElementById('aud_stp11_2');
        x.play();
   },2500);

  
  setTimeout(function()
          {

       document.getElementById("tb_pro_can11").style.visibility="hidden";

       document.getElementById("tgt_pro_can11").style.visibility="visible";
       document.getElementById("tgt_pro_can11").style.height="170px";
       document.getElementById("tgt_pro_can11").style.width="400px";

       $('#pro2_can11').draggable({
        revert: true,
        droptarget: '#tgt_pro_can11',
        drop: pro2_can11_drop
        });
    
     },4500);

}

// =========================================CANVAS11==================

// =========================================CANVAS12==================

function navNext12()

{
  document.getElementById("canvas11").style.visibility="hidden";
  document.getElementById("canvas12").style.visibility="visible";
  document.getElementById("mrk_05").innerHTML=marks;
}


// ============================MCQ CANVAS12====================================



function ansshw_c12() {

            if(document.getElementById('optionB5').checked) {
                document.getElementById("ans_can12").innerHTML = document.getElementById("optionC5").value;
                document.getElementById("showans_can12").style.display="none";
                document.getElementById("mrk_05").innerHTML=marks;
                document.getElementById("nextButton12").style.visibility="visible";
            }
            else if(document.getElementById('optionA5').checked) {
              marks=marks+1;
              document.getElementById("ans_can12").style.color="green";
              document.getElementById("mrk_05").innerHTML=marks;
              // document.getElementById("mrk_00").style.visibility="hidden";
              document.getElementById("got_mrkcan12").style.visibility="visible";

              setTimeout(function()
              {

              var x= document.getElementById('aud_congo1mrk_can12');
              x.play();

              },300);

              document.getElementById("ans_can12").innerHTML = document.getElementById("optionB5").value;
              document.getElementById("showans_can12").style.display="none";
              document.getElementById("nextButton12").style.visibility="visible";

              }

            else if(document.getElementById('optionD5').checked) {
             
                document.getElementById("ans_can12").innerHTML = document.getElementById("optionD5").value;
                document.getElementById("showans_can12").style.display="none";
                document.getElementById("nextButton12").style.visibility="visible";
                document.getElementById("mrk_05").innerHTML=marks;
            }
            else if(document.getElementById('optionC5').checked) {
                document.getElementById("ans_can12").innerHTML = document.getElementById("optionA5").value;
                document.getElementById("showans_can12").style.display="none";
                document.getElementById("nextButton12").style.visibility="visible";
                document.getElementById("mrk_05").innerHTML=marks;
            }
            else {
                document.getElementById("ans_can12").innerHTML = "Select Option";
            }
        }
 

// ============================MCQ CANVAS12====================================


// =========================================CANVAS12==================

// =========================================CANVAS13==================

function navNext13()

{
  document.getElementById("canvas12").style.visibility="hidden";
  document.getElementById("canvas13").style.visibility="visible";

  setTimeout(function()
          {

       $("#step13_1").slideDown("slow");
      
          },1000);

  setTimeout(function()
  {
    var x= document.getElementById('aud_stp13_1');
        x.play();
   },1500);

  setTimeout(function()
          {

       document.getElementById("tb_platecan13zoom").style.visibility="visible";
       document.getElementById("arowdwn13_1").style.visibility="visible";
       document.getElementById("arowdwn13_1").style.animation="arowdwn3_1shk 0.5s infinite";

      
          },3500);
 
}


function platecan13_zoom()

{
    document.getElementById("tb_platecan13zoom").style.visibility="hidden";
    document.getElementById("arowdwn13_1").style.visibility="hidden";
    document.getElementById("step13_1").style.visibility="hidden";

    setTimeout(function()
          {

      $( "#zoomgps_can13" ).fadeIn(500);
      $( "#gpswire1_can13" ).fadeIn(500);
      
         },500);

    setTimeout(function()
          {

      document.getElementById("handle1_can13").style.visibility="visible";
      document.getElementById("tb_gpsmove").style.visibility="visible";

    },1500);

    setTimeout(function()
          {

       $("#step13_2").slideDown("slow");

       document.getElementById("tape1_can13").style.animation="naza_pop 4s infinite";
      
          },3000);

    setTimeout(function()
  {
    var x= document.getElementById('aud_stp13_2');
        x.play();
   },3500);

    setTimeout(function()
          {

       document.getElementById("tb_tape1_can13").style.visibility="hidden";

       document.getElementById("tgt_tape1_can13").style.visibility="visible";
       document.getElementById("tgt_tape1_can13").style.height="91px";
       document.getElementById("tgt_tape1_can13").style.width="105px";

       $('#tape11_can13').draggable({
        revert: true,
        droptarget: '#tgt_tape1_can13',
        drop: tape1_can13_drop
        });
    
     },6500);
}


function tape1_can13_hd()

{
    document.getElementById("tape1_can13").style.visibility="hidden";
    document.getElementById("tape11_can13").style.visibility="visible";

}

function stp13_2hd()

{
    document.getElementById("step13_2").style.visibility="hidden";

}

function tape1_can13_drop(event, droptarget)

{
  $(this).draggable('destroy');

  document.getElementById("tgt_tape1_can13").style.visibility="hidden";
  document.getElementById("tgt_tape1_can13").style.height="0px";
  document.getElementById("tgt_tape1_can13").style.width="0px";

  document.getElementById("tape11_can13").style.visibility="hidden";
  document.getElementById("tape111_can13").style.visibility="visible";

  setTimeout(function()
          {

       $("#step13_3").slideDown("slow");

       document.getElementById("standgps").style.animation="naza_pop4 4s infinite";
      
          },1000);

  setTimeout(function()
  {
    var x= document.getElementById('aud_stp13_3');
        x.play();
   },1500);

  setTimeout(function()
          {

       document.getElementById("tb_standgps").style.visibility="hidden";

       document.getElementById("tgt_standgps").style.visibility="visible";
       document.getElementById("tgt_standgps").style.height="175px";
       document.getElementById("tgt_standgps").style.width="105px";

       $('#standgps2').draggable({
        revert: true,
        droptarget: '#tgt_standgps',
        drop: standgps2_drop
        });
    
     },5500);

}


function standgps_hd()

{
    document.getElementById("standgps").style.visibility="hidden";
    document.getElementById("standgps2").style.visibility="visible";

}

function stp13_3hd()

{
    document.getElementById("step13_3").style.visibility="hidden";

}


function standgps2_drop(event, droptarget)

{
  $(this).draggable('destroy');

  document.getElementById("tgt_standgps").style.visibility="hidden";
  document.getElementById("tgt_standgps").style.height="0px";
  document.getElementById("tgt_standgps").style.width="0px";

  document.getElementById("standgps2").style.visibility="hidden";
  document.getElementById("standgps3").style.visibility="visible";

  setTimeout(function()
          {

       $("#step13_4").slideDown("slow");

       document.getElementById("tape2_can13").style.animation="naza_pop 4s infinite";
      
          },1000);

  setTimeout(function()
  {
    var x= document.getElementById('aud_stp13_4');
        x.play();
   },1500);

    setTimeout(function()
          {

       document.getElementById("tb_tape2_can13").style.visibility="hidden";

       document.getElementById("tgt_tape2_can13").style.visibility="visible";
       document.getElementById("tgt_tape2_can13").style.height="91px";
       document.getElementById("tgt_tape2_can13").style.width="105px";

       $('#tape22_can13').draggable({
        revert: true,
        droptarget: '#tgt_tape2_can13',
        drop: tape2_can13_drop
        });
    
     },5500);

}

function tape2_can13_hd()

{
    document.getElementById("tape2_can13").style.visibility="hidden";
    document.getElementById("tape22_can13").style.visibility="visible";

}

function stp13_4hd()

{
    document.getElementById("step13_4").style.visibility="hidden";

}

function tape2_can13_drop(event, droptarget)

{
  $(this).draggable('destroy');

  document.getElementById("tgt_tape2_can13").style.visibility="hidden";
  document.getElementById("tgt_tape2_can13").style.height="0px";
  document.getElementById("tgt_tape2_can13").style.width="0px";

  document.getElementById("tape22_can13").style.visibility="hidden";
  document.getElementById("tape222_can13").style.visibility="visible";

  setTimeout(function()
          {

       $("#step13_5").slideDown("slow");
      
          },1000);

  setTimeout(function()
  {
    var x= document.getElementById('aud_stp13_5');
        x.play();
   },1500);

  setTimeout(function()
          {

       document.getElementById("arowdwn13_3").style.visibility="visible";
       document.getElementById("arowdwn13_2").style.visibility="visible";
       document.getElementById("arowdwn13_2").style.animation="arowdwn13_2shk 0.5s infinite";

       document.getElementById("svg_can13").style.visibility="visible";

       document.getElementById("handle1_div_can13").style.visibility="visible";
       document.getElementById("handle1_div_can13").style.height="180px";
       document.getElementById("handle1_div_can13").style.width="190px";

       document.getElementById("tb_gpsmove").style.visibility="hidden";
           
     },4500);

}


// ===================================wire==============================


var targets13_1 = $("#handle1_div_can13");
var bezierWeight5 = 0.675;

var handles_can13 = document.querySelectorAll(".handle_can13");
var path_can13 = document.querySelector(".path_can13");

TweenLite.set(handles_can13[1], { x: 447, y: 171 });
TweenLite.set(handles_can13[0], { x: 579, y: 335 });

Draggable.create(handles_can13, {
  // onDrag: updatePath

  onDrag:function(e) {

  var x1 = handles_can13[1]._gsTransform.x;
  var y1 = handles_can13[1]._gsTransform.y;
  
  var x4 = handles_can13[0]._gsTransform.x;
  var y4 = handles_can13[0]._gsTransform.y;
  
  var dx = Math.abs(x4 - x1) * bezierWeight5;
  
  var x2 = x1 - dx;
  var x3 = x4 + dx;
  
  var data = `M${x1} ${y1} C ${x2} ${y1} ${x3} ${y4} ${x4} ${y4}`;
  
  path_can13.setAttribute("d", data);
   document.getElementById("gpswire1_can13").style.visibility="hidden";
   document.getElementById("arowdwn13_2").style.visibility="hidden";
   document.getElementById("step13_5").style.visibility="hidden";
   
   
  for(var i=0; i<targets13_1.length;i++)

  {
    if (this.hitTest(targets13_1[i],"100%")) 

      { this.vars.onDragEnd=null; 
        this.disable();


document.getElementById("handle1_div_can13").style.visibility="hidden";
document.getElementById("handle1_div_can13").style.height="0px";
document.getElementById("handle1_div_can13").style.width="0px";

document.getElementById("svg_can13").style.visibility="hidden";
document.getElementById("path_can13").style.visibility="hidden";
document.getElementById("handle1_can13").style.visibility="hidden";
document.getElementById("arowdwn13_3").style.visibility="hidden";

document.getElementById("gpszoom_han").style.visibility="visible";
document.getElementById("gpswire2_can13").style.visibility="visible";

document.getElementById("platecan13").style.visibility="hidden";
document.getElementById("plategpsfix").style.visibility="visible";

setTimeout(function()
          {

      $( "#zoomgps_can13" ).fadeOut(1000);
      $( "#gpszoom_han" ).fadeOut(1000);
      $( "#gpswire2_can13" ).fadeOut(1000);
      $( "#tape222_can13" ).fadeOut(1000);
      $( "#tape111_can13" ).fadeOut(1000);
      $( "#standgps3" ).fadeOut(1000);

         },1000);

setTimeout(function()

          {

      document.getElementById("nextButton13").style.visibility="visible";

         },3000);


    }
  }
}
  
});



// =========================================CANVAS13==================


// =========================================CANVAS14==================

function navNext14()

{
  document.getElementById("canvas13").style.visibility="hidden";
  document.getElementById("canvas14").style.visibility="visible";
  document.getElementById("mrk_06").innerHTML=marks;
}


// ============================MCQ CANVAS14====================================



function ansshw_c14() {

            if(document.getElementById('optionB6').checked) {
                document.getElementById("ans_can14").innerHTML = document.getElementById("optionC6").value;
                document.getElementById("showans_can14").style.display="none";
                document.getElementById("mrk_06").innerHTML=marks;
                document.getElementById("nextButton14").style.visibility="visible";
            }
            else if(document.getElementById('optionD6').checked) {
              marks=marks+1;
              document.getElementById("ans_can14").style.color="green";
              document.getElementById("mrk_06").innerHTML=marks;
              // document.getElementById("mrk_00").style.visibility="hidden";
              document.getElementById("got_mrkcan14").style.visibility="visible";

              setTimeout(function()
              {

              var x= document.getElementById('aud_congo1mrk_can14');
              x.play();

              },300);

              document.getElementById("ans_can14").innerHTML = document.getElementById("optionB6").value;
              document.getElementById("showans_can14").style.display="none";
              document.getElementById("nextButton14").style.visibility="visible";

              }

            else if(document.getElementById('optionA6').checked) {
             
                document.getElementById("ans_can14").innerHTML = document.getElementById("optionD6").value;
                document.getElementById("showans_can14").style.display="none";
                document.getElementById("nextButton14").style.visibility="visible";
                document.getElementById("mrk_06").innerHTML=marks;
            }
            else if(document.getElementById('optionC6').checked) {
                document.getElementById("ans_can14").innerHTML = document.getElementById("optionA6").value;
                document.getElementById("showans_can14").style.display="none";
                document.getElementById("nextButton14").style.visibility="visible";
                document.getElementById("mrk_06").innerHTML=marks;
            }
            else {
                document.getElementById("ans_can14").innerHTML = "Select Option";
            }
        }
 

// ============================MCQ CANVAS14====================================


// =========================================CANVAS14==================


// =========================================CANVAS15==================

function navNext15()

{
  document.getElementById("canvas14").style.visibility="hidden";
  document.getElementById("canvas15").style.visibility="visible";

  setTimeout(function()
          {

       $("#step15_1").slideDown("slow");
      
          },1000);

  setTimeout(function()
  {
    var x= document.getElementById('aud_stp15_1');
        x.play();
   },1500);


  setTimeout(function()
          {

       document.getElementById("tb_plategpsfix").style.visibility="visible";
       document.getElementById("arowdwn15_1").style.visibility="visible";
       document.getElementById("arowdwn15_1").style.animation="arowdwn3_1shk 0.5s infinite";

          },3500);  
}


function platecan15_zoom()

{
    document.getElementById("tb_plategpsfix").style.visibility="hidden";
    document.getElementById("arowdwn15_1").style.visibility="hidden";
    document.getElementById("step15_1").style.visibility="hidden";

    setTimeout(function()
          {

      $( "#zoombattery" ).fadeIn(1000);

         },500);

    setTimeout(function()
          {

       $("#step15_2").slideDown("slow");
       document.getElementById("belt").style.animation="naza_pop4 4s infinite";

          },2500);

    setTimeout(function()
  {
    var x= document.getElementById('aud_stp15_2');
        x.play();
   },3000);

 
    setTimeout(function()
          {

       document.getElementById("tb_belt").style.visibility="hidden";

       document.getElementById("tgt_belt").style.visibility="visible";
       document.getElementById("tgt_belt").style.height="440px";
       document.getElementById("tgt_belt").style.width="105px";

       $('#belt2').draggable({
        revert: true,
        droptarget: '#tgt_belt',
        drop: belt_drop
        });
    
     },6000);
}


function belt_hd()

{
    document.getElementById("belt").style.visibility="hidden";
    document.getElementById("belt2").style.visibility="visible";

}

function stp15_2hd()

{
    document.getElementById("step15_2").style.visibility="hidden";

}



function belt_drop(event, droptarget)

{
  $(this).draggable('destroy');

  document.getElementById("tgt_belt").style.visibility="hidden";
  document.getElementById("tgt_belt").style.height="0px";
  document.getElementById("tgt_belt").style.width="0px";

  document.getElementById("belt2").style.visibility="hidden";
  document.getElementById("beltbck").style.visibility="visible";
  document.getElementById("platebeltup").style.visibility="visible";

  setTimeout(function()
          {

       $("#intro_battery").slideDown("slow");

          },1000);

  setTimeout(function()
  {
    var x= document.getElementById('aud_introbattery');
        x.play();
   },1500);

  setTimeout(function()
          {

      document.getElementById("skpbtn_battery").style.visibility="hidden";
      document.getElementById("okbtn_battery").style.visibility="visible";

         },12500);

}


function battery_hd()

{
    document.getElementById("battery").style.visibility="hidden";
    document.getElementById("battery2").style.visibility="visible";

}

function stp15_3hd()

{
    document.getElementById("step15_3").style.visibility="hidden";

}


function battery_drop(event, droptarget)

{
  $(this).draggable('destroy');

  document.getElementById("tgt_battery").style.visibility="hidden";
  document.getElementById("tgt_battery").style.height="0px";
  document.getElementById("tgt_battery").style.width="0px";

  document.getElementById("battery2").style.height="125px";
  document.getElementById("battery2").style.left="282px";
  document.getElementById("battery2").style.top="202px";

  setTimeout(function()
          {

       $("#step15_4").slideDown("slow");
      
          },1000);

  setTimeout(function()
  {
    var x= document.getElementById('aud_stp15_4');
        x.play();
   },1500);

  setTimeout(function()
          {

       document.getElementById("tb_beltbck").style.visibility="visible";
       document.getElementById("arowdwn15_2").style.visibility="visible";
       document.getElementById("arowdwn15_2").style.animation="arowdwn3_1shk 0.5s infinite";

          },4500); 

}


function beltfix()
{
    document.getElementById("tb_beltbck").style.visibility="hidden";
    document.getElementById("arowdwn15_2").style.visibility="hidden";
    document.getElementById("beltbck").style.visibility="hidden";
    document.getElementById("step15_4").style.visibility="hidden";
    document.getElementById("belttied").style.visibility="visible";

    setTimeout(function()
          {

      $( "#belttied" ).fadeOut(1000);
      $( "#battery2" ).fadeOut(1000);
      $( "#zoombattery" ).fadeOut(1000);
      $( "#platebeltup" ).fadeOut(1000);

      $( "#batterys" ).fadeIn(1000);
      $( "#belttied2" ).fadeIn(1000);

         },1000);

    setTimeout(function()
          {

      $( "#zoombatterywire" ).fadeIn(1000);
      $( "#zoomwire1b" ).fadeIn(1000);

         },3000);

    setTimeout(function()
          {

      document.getElementById("svg_can15").style.visibility="visible";
      document.getElementById("handle1_can15").style.visibility="visible";
      document.getElementById("tb_bsocketmove").style.visibility="visible";

         },3500);

    setTimeout(function()
          {

       $("#step15_5").slideDown("slow");
      
          },4500);

     setTimeout(function()
  {
    var x= document.getElementById('aud_stp15_5');
        x.play();
   },5000);

    setTimeout(function()
          {

       document.getElementById("tb_bsocketmove").style.visibility="hidden";
       document.getElementById("arowdwn15_4").style.visibility="visible";
       document.getElementById("arowdwn15_3").style.visibility="visible";
       document.getElementById("arowdwn15_3").style.animation="arowdwn15_3shk 0.5s infinite";

       document.getElementById("handle1_div_can15").style.visibility="visible";
       document.getElementById("handle1_div_can15").style.height="120px";
       document.getElementById("handle1_div_can15").style.width="85px";

          },10000); 
}


// ===================================wire==============================


var targets15_1 = $("#handle1_div_can15");
var bezierWeight5 = 0.675;

var handles_can15 = document.querySelectorAll(".handle_can15");
var path_can15 = document.querySelector(".path_can15");

TweenLite.set(handles_can15[1], { x: 310, y: 408 });
TweenLite.set(handles_can15[0], { x: 241, y: 295 });

Draggable.create(handles_can15, {
  // onDrag: updatePath

  onDrag:function(e) {

  var x1 = handles_can15[1]._gsTransform.x;
  var y1 = handles_can15[1]._gsTransform.y;
  
  var x4 = handles_can15[0]._gsTransform.x;
  var y4 = handles_can15[0]._gsTransform.y;
  
  var dx = Math.abs(x4 - x1) * bezierWeight5;
  
  var x2 = x1 - dx;
  var x3 = x4 + dx;
  
  var data = `M${x1} ${y1} C ${x2} ${y1} ${x3} ${y4} ${x4} ${y4}`;
  
  path_can15.setAttribute("d", data);
   document.getElementById("zoomwire1b").style.visibility="hidden";
   document.getElementById("arowdwn15_3").style.visibility="hidden";
   document.getElementById("step15_5").style.visibility="hidden";
   
   
  for(var i=0; i<targets15_1.length;i++)

  {
    if (this.hitTest(targets15_1[i],"100%")) 

      { this.vars.onDragEnd=null; 
        this.disable();


document.getElementById("handle1_div_can15").style.visibility="hidden";
document.getElementById("handle1_div_can15").style.height="0px";
document.getElementById("handle1_div_can15").style.width="0px";

document.getElementById("svg_can15").style.visibility="hidden";
document.getElementById("handle1_can15").style.visibility="hidden";
document.getElementById("arowdwn15_4").style.visibility="hidden";

document.getElementById("plugbattery").style.visibility="visible";
document.getElementById("zoomwire2b").style.visibility="visible";

document.getElementById("plategpsfix_last").style.visibility="hidden";
document.getElementById("batterys").style.visibility="hidden";
document.getElementById("belttied2").style.visibility="hidden";
document.getElementById("fullfinal").style.visibility="visible";

setTimeout(function()
          {

      $( "#zoombatterywire" ).fadeOut(1000);
      $( "#plugbattery" ).fadeOut(1000);
      $( "#zoomwire2b" ).fadeOut(1000);
      
         },1000);

setTimeout(function()

          {

    $("#note_complete").slideDown("slow");
    
         },3000);

setTimeout(function()

          {

    document.getElementById("nextButton15").style.visibility="visible";
    
         },6000);


    }
  }
}
  
});


function skp_battery()

{

const audio1 = document.querySelector("#aud_introbattery");
audio1.pause();
audio1.currentTime = 0;

      $( "#intro_battery" ).fadeOut(1000);

  setTimeout(function()
          {

       $("#step15_3").slideDown("slow");
       document.getElementById("battery").style.animation="naza_pop3 3s infinite";

          },1000);

  setTimeout(function()
  {
    var x= document.getElementById('aud_stp15_3');
        x.play();
   },1500);

   setTimeout(function()
          {

       document.getElementById("tb_battery").style.visibility="hidden";

       document.getElementById("tgt_battery").style.visibility="visible";
       document.getElementById("tgt_battery").style.height="130px";
       document.getElementById("tgt_battery").style.width="265px";

       $('#battery2').draggable({
        revert: true,
        droptarget: '#tgt_battery',
        drop: battery_drop
        });
    
     },3500);
      

}

function ok_battery()

{

 $( "#intro_battery" ).fadeOut(1000);

  setTimeout(function()
          {

       $("#step15_3").slideDown("slow");
       document.getElementById("battery").style.animation="naza_pop3 3s infinite";

          },1000);

  setTimeout(function()
  {
    var x= document.getElementById('aud_stp15_3');
        x.play();
   },1500);

   setTimeout(function()
          {

       document.getElementById("tb_battery").style.visibility="hidden";

       document.getElementById("tgt_battery").style.visibility="visible";
       document.getElementById("tgt_battery").style.height="130px";
       document.getElementById("tgt_battery").style.width="265px";

       $('#battery2').draggable({
        revert: true,
        droptarget: '#tgt_battery',
        drop: battery_drop
        });
    
     },3500);
      

}



// =================================CANVAS15=====================


function navNext16()

{
  document.getElementById("canvas15").style.visibility="hidden";
  document.getElementById("canvas16").style.visibility="visible";
  document.getElementById("totalmarks").innerHTML=marks;
}

function reset()
{
    location.reload();
}
