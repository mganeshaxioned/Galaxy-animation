import './style.css'
import * as THREE from 'three'
import { LensflareElement } from './Lensflare'

// import * as THREE from 'three'
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
// import * as dat from 'dat.gui'
// import { AdditiveBlending, Float32BufferAttribute } from 'three'

// /**
//  * Base
//  */
// // Debug
// const gui = new dat.GUI({
//     width: 400,
//     closed: true
// })

// const textureLoader = new THREE.TextureLoader()
// const shape = textureLoader.load('/particleShape/1.png')

// // Canvas
// const canvas = document.querySelector('canvas.webgl')

// // Scene
// const scene = new THREE.Scene()


// //Galaxy Generator

// const parameters = {}

// parameters.count = 40000
// parameters.size = 0.01
// parameters.radius = 5
// parameters.branches = 8
// parameters.spin = 1
// parameters.randomness = 0.3
// parameters.randomnessPower = 5
// parameters.stars = 100000
// parameters.starColor = '#37182a'
// parameters.insideColor = '#627fd9'
// parameters.outsideColor = '#bbaeed'

// gui.add(parameters, 'count').min(100).max(100000).step(100).onChange(generateGalaxy).name('stars in galaxy')
// gui.add(parameters, 'stars').min(0).max(100000).step(100).onChange(generateBgStars).name('background stars')
// gui.addColor(parameters, 'starColor').onChange(generateBgStars).name('color of stars')
// gui.add(parameters, 'size').min(0.001).max(0.1).step(0.001).onChange(generateGalaxy).name('size of stars in galaxy')
// gui.add(parameters, 'radius').min(1).max(10).step(1).onChange(generateGalaxy).name('radius of galaxy')
// gui.add(parameters, 'branches').min(1).max(10).step(1).onChange(generateGalaxy).name('branches in galaxy')
// gui.add(parameters, 'spin').min(-5).max(5).step(0.001).onChange(generateGalaxy).name('spin of the galaxy')
// gui.add(parameters, 'randomness').min(0).max(2).step(0.01).onChange(generateGalaxy)
// gui.add(parameters, 'randomnessPower').min(1).max(10).step(1).onChange(generateGalaxy)
// gui.addColor(parameters, 'insideColor').onChange(generateGalaxy).name('color of core')
// gui.addColor(parameters, 'outsideColor').onChange(generateGalaxy).name('color of branches')


// let bgStarsGeometry = null
// let bgStarsMaterial = null
// let bgStars = null

// //Background stars
// function generateBgStars(){

//     if(bgStars!==null){
//         bgStarsGeometry.dispose()
//         bgStarsMaterial.dispose()
//         scene.remove(bgStars)
//     }

//     bgStarsGeometry = new THREE.BufferGeometry()
//     const bgStarsPositions = new Float32Array(parameters.stars * 3)

//     for(let j = 0; j<parameters.stars; j++){
//         bgStarsPositions[j*3 + 0] = (Math.random() - 0.5) * 20
//         bgStarsPositions[j*3 + 1] = (Math.random() - 0.5) * 20
//         bgStarsPositions[j*3 + 2] = (Math.random() - 0.5) * 20
//     }

//     bgStarsGeometry.setAttribute('position', new THREE.BufferAttribute(bgStarsPositions, 3))

//     bgStarsMaterial = new THREE.PointsMaterial({
//         color: 'white',
//         size: parameters.size,
//         depthWrite: false,
//         sizeAttenuation: true,
//         blending: AdditiveBlending,
//         color: parameters.starColor,
//         transparent: true,
//         alphaMap: shape
//     })

//     bgStars = new THREE.Points(bgStarsGeometry, bgStarsMaterial)

//     scene.add(bgStars)
// }

// generateBgStars()




// //gALAXY GENerator
// let geometry = null
// let material = null
// let points = null


// function generateGalaxy(){

//     if(points !== null){
//         geometry.dispose()
//         material.dispose()
//         scene.remove(points)
//     }

//     geometry = new THREE.BufferGeometry()

//     const positions = new Float32Array(parameters.count *3)
//     const colors = new Float32Array(parameters.count *3)

//     const colorInside = new THREE.Color(parameters.insideColor)
//     const colorOutside = new THREE.Color(parameters.outsideColor)
//     console.log('parameters', parameters)
//     for(let i=0; i<parameters.count; i++){

//         //Position
//         const x = Math.random() * parameters.radius
//         // const branchAngle = (i % parameters.branches) / parameters.branches * 2 * Math.PI
//         const branchAngle = Math.sqrt(i) + i
//         // console.log(branchAngle)
//         const spinAngle = x * parameters.spin

//         const randomX = Math.pow(Math.random(), parameters.randomnessPower) * (Math.random()<0.5 ? 1: -1) 
//         const randomY = Math.pow(Math.random(), parameters.randomnessPower) * (Math.random()<0.5 ? 1: -1) 
//         const randomZ = Math.pow(Math.random(), parameters.randomnessPower) * (Math.random()<0.5 ? 1: -1)
//         // console.log(randomX, randomY, randomZ)
//         // positions[i * 3] = Math.random()
//         // positions[i * 3 + 1] = Math.random();
//         // positions[i * 3 + 2] = Math.random();
//         positions[i * 3] = Math.sin(branchAngle + spinAngle) * x ;
//         positions[i * 3 + 1] = randomY;
//         positions[i * 3 + 2] = Math.cos(branchAngle + spinAngle) * x ;

//         //Color

//         const mixedColor = colorInside.clone()
//         mixedColor.lerp(colorOutside, x / parameters.radius)

//         colors[i*3 + 0] = mixedColor.r
//         colors[i*3 + 1] = mixedColor.g
//         colors[i*3 + 2] = mixedColor.b
//     }

//     geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
//     geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))

//     material = new THREE.PointsMaterial({
//         color: 'white',
//         size: parameters.size,
//         depthWrite: false,
//         sizeAttenuation: true,
//         blending: AdditiveBlending,
//         vertexColors: true,
//         transparent: true,
//         alphaMap: shape
//     })

//     points = new THREE.Points(geometry, material)
//     scene.add(points)


// }

// generateGalaxy()

// /**
//  * Sizes
//  */
// const sizes = {
//     width: window.innerWidth,
//     height: window.innerHeight
// }

// window.addEventListener('resize', () =>
// {
//     // Update sizes
//     sizes.width = window.innerWidth
//     sizes.height = window.innerHeight

//     // Update camera
//     camera.aspect = sizes.width / sizes.height
//     camera.updateProjectionMatrix()

//     // Update renderer
//     renderer.setSize(sizes.width, sizes.height)
//     renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
// })

// /**
//  * Camera
//  */
// // Base camera
// const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
// camera.position.x = 3
// camera.position.y = 2
// camera.position.z = 1
// scene.add(camera)


// document.addEventListener("mousemove", (e) => {
//     // camera.position.z = e.clientX / 1500;
//     // camera.position.y = e.clientY / 200;

// // camera.position.z = ( e.clientX / window.innerWidth ) / 10000 - 1;   
// // camera.position.y = - ( e.clientY / window.innerHeight ) * 2 + 1;

// });

// const render = (time) => {

//     // const elapsedTime = clock.getElapsedTime()

//     //Update the camera
//     // camera.position.x = 0
//     // camera.position.y = 1
//     // camera.position.z = 1

//     renderer.render(scene, camera);
//     // loop
//     requestAnimationFrame(render);
//   };


// // Controls
// const controls = new OrbitControls(camera, canvas)
// // controls.enableDamping = false
// controls.enabled = false;

// /**
//  * Renderer
//  */
// const renderer = new THREE.WebGLRenderer({
//     canvas: canvas
// })
// renderer.setSize(sizes.width, sizes.height)
// renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

// /**
//  * Animate
//  */
// const clock = new THREE.Clock()

// const tick = () =>
// {
//     const elapsedTime = clock.getElapsedTime()

//     //Update the camera
//     points.rotation.y = elapsedTime*0.1
//     bgStars.rotation.y = - elapsedTime*0.05

//     // Update controls
//     // controls.update()

//     // Render
//     renderer.render(scene, camera)

//     // Call tick again on the next frame
//     window.requestAnimationFrame(tick)
// }

// tick()


// new galaxy code 





var galaxie = document.getElementById('galaxie')
var renderer = new THREE.WebGLRenderer({
  alpha: true,
  antialias: true
})
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.setClearColor(0x000000)
galaxie.appendChild(renderer.domElement)

var scene = new THREE.Scene()
scene.add(new THREE.AmbientLight(0xffffff))

var camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 10000)
camera.position.set(1, 19, 35)
camera.rotation.x = -35 * Math.PI / 180
scene.add(camera)

function random () {
  return Math.random() * 2 - 1
}

function createSpiral (amount, step) {
  var sommets = []

  for (var i = 2000; i < amount; i += step) {
    var angle = -i / 1200
    var distance = i / 800
    var progression = i / amount * 3 + 0.5

    sommets.push(
      progression * random() * random() + Math.sin(angle) * distance,
      progression * random() * random(),
      progression * random() * random() + Math.cos(angle) * distance
    )
  }

  var spirale = new THREE.BufferGeometry()
  spirale.addAttribute('position', new THREE.Float32BufferAttribute(sommets, 3))

  return spirale
}

function createTexture (from, to) {
  var canvas = document.createElement('canvas')
  canvas.width = 16
  canvas.height = 16
  var context = canvas.getContext('2d')
  var degrade = context.createRadialGradient(8, 8, 0, 8, 8, 8)
  degrade.addColorStop(0, from)
  degrade.addColorStop(1, to)
  context.fillStyle = degrade
  context.fillRect(0, 0, canvas.width, canvas.height)
  return new THREE.CanvasTexture(canvas)
}

//
const galaxy = new THREE.Object3D()
const texture = new THREE.TextureLoader()

function createBranch (pointsNb, pointsSize, materialSize, materialColor, additiveBlending, isInvert) {
  let spiral = createSpiral(pointsNb, pointsSize)
  let material = new THREE.PointsMaterial({
    size: materialSize,
    map: createTexture(materialColor[0], materialColor[1]),
    depthWrite: false,
    transparent: true,
    blending: additiveBlending ? THREE.AdditiveBlending : THREE.NormalBlending
  })
  let points = new THREE.Points(spiral, material)
  points.rotation.y = isInvert ? Math.PI : ''
  galaxy.add(points)
}

/* -------------------------------------------------------------------------- */
/*                                     Fog                                    */
/* -------------------------------------------------------------------------- */

createBranch(20000, 15, 4, [ 'rgba(245, 195, 251, 0.2) ', 'rgba(0,0,0,0)' ], false, false)

createBranch(20000, 10, 4, [ 'rgba(174, 190, 249, 0.3)', 'rgba(0,0,0,0)' ], false, true)

// createBranch(20000, 15, 4, [ 'rgba(255, 255, 255, 0.2)', 'rgba(0,0,0,0)' ], false, false)

// createBranch(20000, 10, 4, [ 'rgba(234, 196, 213, 0.3)', 'rgba(0,0,0,0)' ], false, true)

/* -------------------------------------------------------------------------- */
/*                                Medium stars                                */
/* -------------------------------------------------------------------------- */

createBranch(20000, 4, 0.4, [ 'rgba(161, 92, 215, 1)', 'rgba(0,0,0,0)' ], true, false)

createBranch(20000, 4, 0.4, [ 'rgba(112, 63, 162, 1)', 'rgba(0,0,0,0)' ], true, true)

/* -------------------------------------------------------------------------- */
/*                                Smalls stars                                */
/* -------------------------------------------------------------------------- */

createBranch(20000, 0.2, 0.25, [ 'rgba(253, 246, 253,1)', 'rgba(0,0,0,0)' ], true, false)

createBranch(20000, 0.2, 0.25, [ 'rgba(253, 246, 253,1)', 'rgba(0,0,0,0)' ], true, true)

/* -------------------------------------------------------------------------- */
/*                                Galaxy Center                               */
/* -------------------------------------------------------------------------- */

var dirLight = new THREE.DirectionalLight(0xffffff, 0.05)
dirLight.position.set(0, 0, 0).normalize()
galaxy.add(dirLight)

dirLight.color.setHSL(0.1, 0.7, 0.5)

var textureFlare0 = texture.load('https://s13.postimg.org/mdpx2hlt3/centre-galaxie-256x256.png')

function addLight (h, s, l, x, y, z) {
  var light = new THREE.PointLight(0xffffff, 1.5, 2000)
  light.color.setHSL(h, s, l)
  light.position.set(x, y, z)
  galaxy.add(light)

  var flareColor = new THREE.Color(0xffffff)
  flareColor.setHSL(h, s, l + 0.2)

  var lensFlare = new LensflareElement(textureFlare0, 1150, 0.0, THREE.AdditiveBlending, flareColor)

  console.log(lensFlare)

  //lensFlare.position.set(x, y, z)

  galaxy.add(lensFlare)
}

addLight(1, 0.8, 0.8, 0, -0.8, 0)

//Ajout des systèmes cliquables

var systemeLight = new THREE.PointLight(0xffffff, 1.5, 1000)

//systeme Vert

var systemeVert = new THREE.Object3D()
var lensVert = new LensflareElement(
  texture.load('https://s13.postimg.org/klwy7kuqf/blanc.png'),
  100,
  0.0,
  THREE.AdditiveBlending
)
systemeVert.add(systemeLight, lensVert)
systemeVert.position.set(-5, -0.8, 15)

// systeme Bleu

var systemeBleu = new THREE.Object3D()
var lensBleu = new LensflareElement(
  texture.load('https://s13.postimg.org/klwy7kuqf/blanc.png'),
  100,
  0.0,
  THREE.AdditiveBlending
)
systemeBleu.add(systemeLight, lensBleu)
systemeBleu.position.set(17, -0.8, 0)

// systeme Rouge

var systemeRouge = new THREE.Object3D()
var lensRouge = new LensflareElement(
  texture.load('https://s13.postimg.org/klwy7kuqf/blanc.png'),
  100,
  0.0,
  THREE.AdditiveBlending
)
systemeRouge.add(systemeLight, lensRouge)
systemeRouge.position.set(-13, -0.8, 6)
// systeme jaune
var systemeJaune = new THREE.Object3D()
var lensJaune = new LensflareElement(
  texture.load('https://s13.postimg.org/klwy7kuqf/blanc.png'),
  100,
  0.0,
  THREE.AdditiveBlending
)
systemeJaune.add(systemeLight, lensJaune)
systemeJaune.position.set(9, -0.4, -18)

//systeme bleu clair

var systemeBleuClair = new THREE.Object3D()
var lensBleuClair = new LensflareElement(
  texture.load('https://s13.postimg.org/klwy7kuqf/blanc.png'),
  100,
  0.0,
  THREE.AdditiveBlending
)
systemeBleuClair.add(systemeLight, lensBleuClair)
systemeBleuClair.position.set(11, 0.4, 13)

//systeme blanc

var systemeBlanc = new THREE.Object3D()
var lensBlanc = new LensflareElement(
  texture.load('https://s13.postimg.org/klwy7kuqf/blanc.png'),
  100,
  0.0,
  THREE.AdditiveBlending
)
systemeBlanc.add(systemeLight, lensBlanc)
systemeBlanc.position.set(-11, 0.4, -13)

/*************************************/
/*********** starfield ****************/
/****************************************/

var starsGeometry = new THREE.Geometry()

for (var i = 0; i < 20000; i++) {
  var star = new THREE.Vector3()
  star.x = THREE.Math.randFloatSpread(2000)
  star.y = THREE.Math.randFloatSpread(2000)
  star.z = THREE.Math.randFloatSpread(2000)

  starsGeometry.vertices.push(star)
}

var starsMaterial = new THREE.PointsMaterial({
  size: 8,
  map: texture.load('https://s13.postimg.org/klwy7kuqf/blanc.png'),
  blending: THREE.AdditiveBlending,
  transparent: true
})

var starField = new THREE.Points(starsGeometry, starsMaterial)

scene.add(starField)

// ajout des objets à leurs parents

galaxy.add(systemeRouge, systemeVert, systemeBleu, systemeJaune, systemeBleuClair, systemeBlanc)

scene.add(galaxy)

//rotation galaxie

function animateGalaxy () {
  requestAnimationFrame(animateGalaxy)

  galaxy.rotation.y -= 1 / 2000
  renderer.render(scene, camera)
}

animateGalaxy()

// fonction adaptation à l'écran

function onWindowResize () {
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()

  renderer.setSize(window.innerWidth, window.innerHeight)
}

window.addEventListener('resize', onWindowResize, false)










var mouseCursor = document.querySelector('.cursor')
var mouseCursorImg = document.querySelector('.cursor img')
var avatarsLi = document.querySelectorAll('.avatars-menu li')
var avatarsWindow = document.querySelector('.avatars-window')

let selectedAvatarSrc

if (sessionStorage.getItem('selectedAvatar')) {
    selectedAvatarSrc = sessionStorage.getItem('selectedAvatar')
    mouseCursorImg.src = selectedAvatarSrc
    avatarsWindow.classList.add("display-none")
    document.querySelector("html").classList.add("cursor-none")
}

window.addEventListener('mousemove', cursor)

avatarsLi.forEach(avtar => {
    avtar.addEventListener('click', selectAvatar)
})

if (document.body.classList.contains("home")) {
    document.querySelector(".custom-space").addEventListener("mouseenter", updateAvatar)
    document.querySelector(".custom-space").addEventListener("mouseleave", defaultAvatar)
}    

function updateAvatar(e) {
    if (!selectedAvatarSrc) { return false}
    mouseCursorImg.src = "avatar2.png"
}

function defaultAvatar(e) {
    if (!selectedAvatarSrc) { return false}
    mouseCursorImg.src = selectedAvatarSrc
}

function selectAvatar(e) {
    if (e.target.tagName === "LI") {
        return false
    }
    selectedAvatarSrc = e.target.src
    sessionStorage.setItem('selectedAvatar', selectedAvatarSrc)
    mouseCursorImg.src = selectedAvatarSrc
    mouseCursor.classList.remove("display-none")
    avatarsWindow.classList.add("display-none")
    document.querySelector("html").classList.add("cursor-none")
}

function cursor(e) {
    mouseCursor.style.top = e.pageY + 'px';
    mouseCursor.style.left = e.pageX + 'px';
    if (sessionStorage.getItem('selectedAvatar')) {
        mouseCursor.classList.remove("display-none")
    }
    // mouseCursor.setAttribute("style", "top: " + e.pageY + "px; left: " + e.pageX + "px;")
}