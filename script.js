// var map = L.map('map').setView([緯度, 経度], ズームレベル);
var map = L.map('map').setView([33.591265, 130.398628], 14);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

//複数アイコンをまとめて定義
const circleIcon = L.Icon.extend({
  options: {
    shadowUrl: 'images/ico_shadow.png',
    iconSize: [40, 40],
    shadowSize: [40, 40],
    iconAnchor: [20, 40],
    shadowAnchor: [20, 40],
    popupAnchor: [0, -42]
  }
});

const whiteIcon = new circleIcon({ iconUrl: 'images/ico.png' }),
  pinkIcon = new circleIcon({ iconUrl: 'images/ico_pink.png' });

L.marker([33.591265, 130.398628], { icon: pinkIcon }).addTo(map).bindPopup('天神駅');
L.marker([33.586926, 130.392576], { icon: whiteIcon }).addTo(map).bindPopup('OFFOFF<br><img src="images/img01.png" alt="img">');
L.marker([33.590841, 130.4128], { icon: whiteIcon }).addTo(map).bindPopup('FUK COFFEE<br><img src="images/img01.png" alt="img">');
L.marker([33.588356, 130.39484], { icon: whiteIcon }).addTo(map).bindPopup('an coffee&scone<br><img src="images/img01.png" alt="img">');
L.marker([33.592431, 130.396401], { icon: whiteIcon }).addTo(map).bindPopup('ぎるふりかふぇ<br><img src="images/img01.png" alt="img">');
L.marker([33.590135, 130.398896], { icon: whiteIcon }).addTo(map).bindPopup('maison cake<br><img src="images/img01.png" alt="img">');



const circle = L.circle([33.591265, 130.398628], {
  color: '#D2B48C', //円の輪郭線の色
  fillColor: '#F5DEB3	', //円の塗りつぶしの色
  fillOpacity: 0.3, //塗りつぶしの不透明度
  radius: 1000 //半径、メートルで指定
}).addTo(map);

// circle.bindPopup("半径1kmの範囲");

// // クリック位置の緯度経度表示
// const popup = L.popup();

// function onMapClick(e) {
//   popup
//     .setLatLng(e.latlng)
//     .setContent("ここは" + e.latlng.toString() + "です")
//     .openOn(map);
// }

// map.on('click', onMapClick);
