import * as THREE from "three";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
const colors = [
    {
        color: '66533C'
    },
    {
        color: '173A2F'
    },
    {
        color: '153944'
    },
    {
        color: '27548D'
    },
    {
        color: '438AAC'
    },
    {
        color: 'FF0000'
    },
    {
        color: 'C0C0C0'
    },
    {
        color: '808080'
    },
    {
        color: '808000'
    },
    {
        color: '00FF00'
    },
    {
        color: '00FFFF'
    },
    {
        color: '008080'
    },
    {
        color: '000080'
    },
    {
        color: 'FF00FF'
    },
    {
        color: '800080'
    },
    {
        color: 'CD5C5C'
    },
    {
        color: 'F08080'
    },
    {
        color: 'FA8072'
    },
    {
        color: 'E9967A'
    },
    {
        color: 'FFA07A'
    },
    {
        color: 'B22222'
    },
    {
        color: 'FFA500'
    },
    {
        color: 'FFFFE0'
    },
    {
        color: 'F0E68C'
    },
    {
        color: '228B22'
    },
    {
        color: '0000CD'
    },
    {
        color: '00BFFF'
    },
    {
        color: '8B4513'
    },
    {
        color: 'D2B48C'
    },
    {
        color: 'FF4500'
    },
    {
        color: 'FF8C00'
    },
    ]
    

   

// Scene
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xffffff); // Optional, black is default
//Add a cube to the scene
const geometry = new THREE.BoxGeometry(1,1,1); // width, height, depth
const material = new THREE.MeshLambertMaterial({ color: 0xfb8e00 });
const mesh = new THREE.Mesh(geometry, material);
mesh.position.set(0,0,0);
scene.add(mesh);







// Set up lights
const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 0.6);
directionalLight.position.set(10, 20, 0); // x, y, z
scene.add(directionalLight);

// Camera
const width = 10;
const height = width * (window.innerHeight / window.innerWidth);
const camera = new THREE.OrthographicCamera(
  width / -2, // left
  width / 2, // right
  height / 2, // top
  height / -2, // bottom
  1, // near
  100 // far
);

camera.position.set(3,3,3);
camera.lookAt(0, 0, 0);

// Renderer
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
//renderer.render(scene, camera);

// Add it to HTML
document.body.appendChild(renderer.domElement);

var controls = new OrbitControls( camera, renderer.domElement );


function animate() { 
  
    requestAnimationFrame( animate ); 
    renderer.render(scene, camera);
}

animate();


const TRAY = document.getElementById('js-tray-slide');

function buildColors(colors) {
  for (let [i, color] of colors.entries()) {
    let swatch = document.createElement('div');
    swatch.classList.add('tray__swatch');

      swatch.style.background = "#" + color.color;

    swatch.setAttribute('data-key', i);
    TRAY.append(swatch);
  }
}

buildColors(colors);

function selectSwatch(e) {
    let color = colors[parseInt(e.target.dataset.key)];
    console.log("swatch clicked")
    console.log(color);
    
    mesh.material.color = new THREE.Color("#" +color.color);
    mesh.material.needsUpdate = true;

}


// Swatches
const swatches = document.querySelectorAll(".tray__swatch");

for (const swatch of swatches) {
  swatch.addEventListener('click', selectSwatch);
}

