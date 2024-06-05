var cnv = document.getElementById("myCanvas");
var ctx = cnv.getContext("2d");
cnv.width = 700;
cnv.height = 500;

ctx.fillStyle = "lightblue";
ctx.fillRect(0, 0, 700, 500);

ctx.fillStyle = "rgb(200, 200, 200";
ctx.beginPath();
ctx.arc(125, 500, 350, 0, 2 * Math.PI);
ctx.fill();
ctx.lineWidth = 30;
ctx.strokeStyle = "rgb(120, 120, 120";
ctx.beginPath();
ctx.moveTo(90, 150);
ctx.lineTo(350, 500);
ctx.stroke();
ctx.fillStyle = "lightgray";
ctx.beginPath();
ctx.arc(450, 650, 400, 0, 2 * Math.PI);
ctx.fill();
ctx.lineWidth = 90;
ctx.strokeStyle = "rgb(120, 120, 120";
ctx.beginPath();
ctx.moveTo(420, 290);
ctx.lineTo(600, 550);
ctx.stroke();

ctx.fillStyle = "yellow";
ctx.beginPath();
ctx.arc(675, 30, 55, 0, 2 * Math.PI);
ctx.fill();

ctx.fillStyle = "orange";
ctx.beginPath();
ctx.arc(675, 30, 50, 0, 2 * Math.PI);
ctx.fill();

let cloud = document.getElementById("cloud-img");
ctx.drawImage(cloud, 540, 0, 120, 100);
ctx.drawImage(cloud, 625, 40, 90, 70);

ctx.fillStyle = "rgb(234, 234, 234";
ctx.beginPath();
ctx.arc(350, 400, 150, 0, 2 * Math.PI);
ctx.fill();

ctx.fillStyle = "rgb(244, 244, 244";
ctx.beginPath();
ctx.arc(350, 325, 125, 0, 2 * Math.PI);
ctx.fill();

ctx.fillStyle = "rgb(255, 255, 255";
ctx.beginPath();
ctx.arc(350, 200, 100, 0, 2 * Math.PI);
ctx.fill();

ctx.fillStyle = "black";
ctx.beginPath();
ctx.arc(350, 400, 10, 0, 2 * Math.PI);
ctx.fill();

ctx.fillStyle = "black";
ctx.beginPath();
ctx.arc(350, 350, 10, 0, 2 * Math.PI);
ctx.fill();

ctx.fillStyle = "black";
ctx.beginPath();
ctx.arc(310, 180, 13, 0, 2 * Math.PI);
ctx.fill();

ctx.fillStyle = "black";
ctx.beginPath();
ctx.arc(400, 180, 13, 0, 2 * Math.PI);
ctx.fill();

ctx.fillStyle = "black";
ctx.beginPath();
ctx.arc(355, 260, 4, 0, 2 * Math.PI);
ctx.fill();

ctx.fillStyle = "black";
ctx.beginPath();
ctx.arc(340, 258, 4, 0, 2 * Math.PI);
ctx.fill();

ctx.fillStyle = "black";
ctx.beginPath();
ctx.arc(325, 252, 4, 0, 2 * Math.PI);
ctx.fill();

ctx.fillStyle = "black";
ctx.beginPath();
ctx.arc(370, 258, 4, 0, 2 * Math.PI);
ctx.fill();

ctx.fillStyle = "black";
ctx.beginPath();
ctx.arc(385, 252, 4, 0, 2 * Math.PI);
ctx.fill();

ctx.fillStyle = "purple";
ctx.beginPath();
ctx.moveTo(350, 300);
ctx.lineTo(320, 320);
ctx.lineTo(320, 280);
ctx.moveTo(350, 300);
ctx.fill();

ctx.fillStyle = "purple";
ctx.beginPath();
ctx.moveTo(350, 300);
ctx.lineTo(380, 280);
ctx.lineTo(380, 320);
ctx.moveTo(350, 300);
ctx.fill();

ctx.fillStyle = "black";
ctx.beginPath();
ctx.arc(350, 300, 10, 0, 2 * Math.PI);
ctx.fill();

ctx.fillStyle = "orange";
ctx.beginPath();
ctx.moveTo(400, 220);
ctx.lineTo(350, 210);
ctx.lineTo(350, 230);
ctx.moveTo(400, 220);
ctx.fill();

ctx.fillStyle = "black";
ctx.fillRect(270, 100, 155, 20);

ctx.fillStyle = "violet";
ctx.fillRect(286, 95, 125, 10);

ctx.fillStyle = "black";
ctx.fillRect(286, 15, 125, 80);

ctx.lineWidth = 10;
ctx.strokeStyle = "brown";
ctx.beginPath();
ctx.moveTo(240, 280);
ctx.lineTo(120, 220);
ctx.stroke();

ctx.lineWidth = 10;
ctx.strokeStyle = "brown";
ctx.beginPath();
ctx.moveTo(180, 250);
ctx.lineTo(160, 200);
ctx.stroke();

ctx.lineWidth = 10;
ctx.strokeStyle = "brown";
ctx.beginPath();
ctx.moveTo(440, 280);
ctx.lineTo(560, 200);
ctx.stroke();

ctx.lineWidth = 10;
ctx.strokeStyle = "brown";
ctx.beginPath();
ctx.moveTo(500, 240);
ctx.lineTo(570, 260);
ctx.stroke();

let cabin = document.getElementById("cabin-img");
ctx.drawImage(cabin, 10, 45, 175, 150);

ctx.fillStyle = "maroon";
ctx.font = "20px Times New Roman";
ctx.fillText("Have a Wonderful Winter Break!", 10, 20);
