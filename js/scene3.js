function scene3() {

  // Setup Stage
  stage = document.querySelector('#stage')
  desert = document.querySelector('#desert')
  desertImgSrc = desert.getAttribute('src')
  stageImg = stage.querySelector('#stage-img')
  stageImg.setAttribute('src', desertImgSrc)

  // Setup Cast

  // Danererys
  var danererysContainer = document.createElement('div')
  danererysContainer.id = 'danererys-container'
  stage.append(danererysContainer)
  danererysContainer.style.position = 'absolute'
  danererysContainer.style.width = '10%'
  danererysContainer.style.height = '34%'
  danererysContainer.style.top = '55%'
  danererysContainer.style.left = '15%'

  danererys = document.querySelector('#danererys')
  danererysContainer.append(danererys)
  danererys.style.position = 'absolute'
  danererys.style.width = '48%'
  danererys.style.top = 0
  danererys.style.left = '10%'

  blueDress = document.querySelector('#blue-dress')
  danererysContainer.append(blueDress)
  blueDress.style.position = 'absolute'
  blueDress.style.bottom = 0

  // Drogo
  var drogoContainer = document.createElement('div')
  drogoContainer.id = 'drogo-container'
  stage.append(drogoContainer)
  drogoContainer.style.position = 'absolute'
  drogoContainer.style.width = '8%'
  drogoContainer.style.height = '31%'
  drogoContainer.style.top = '55%'
  drogoContainer.style.left = '60%'

  drogo = document.querySelector('#drogo')
  drogoContainer.append(drogo)
  drogo.style.width = '75%'
  drogo.style.position = 'absolute'
  drogo.style.left = '10%'

  bulkyMan = document.querySelector('#bulky-man')
  drogoContainer.append(bulkyMan)
  bulkyMan.style.position = 'absolute'
  bulkyMan.style.bottom = 0

  // Setup Props

  // Egg
  egg = document.querySelector('#egg')
  stage.append(egg)
  egg.style.position = 'absolute'
  egg.style.top = '80%'
  egg.style.left = '38%'
  egg.style.height = '18%'
  egg.style.transform = 'rotate(30deg)'

  // Action!

  // Danererys and Drogo playing with egg

  // Start stage direction 1
  frame(function() {
    egg.style.top = '80%'
    egg.style.left = '38%'
    danererysContainer.style.top = '55%'
    danererysContainer.style.left = '15%'
    drogoContainer.style.top = '55%'
    drogoContainer.style.left = '60%'
    egg.style.transform = 'rotate(30deg)'
  })

  // Middle stage frames
  frame(function() {
    egg.style.top = '77%'
    egg.style.left = '35%'
    danererysContainer.style.top = '50%'
    danererysContainer.style.left = '17%'
    drogoContainer.style.top = '50%'
    drogoContainer.style.left = '55%'
    egg.style.transform = 'rotate(-30deg)'
  })

  frame(function() {
    egg.style.top = '74%'
    egg.style.left = '32%'
    danererysContainer.style.left = '19%'
    drogoContainer.style.top = '50%'
    drogoContainer.style.left = '45%'
    egg.style.transform = 'rotate(-40deg)'
  })

  frame(function() {
    egg.style.top = '70%'
    egg.style.left = '36%'
    danererysContainer.style.top = '52%'
    danererysContainer.style.left = '21%'
    drogoContainer.style.top = '50%'
    drogoContainer.style.left = '40%'
    egg.style.transform = 'rotate(50deg)'
  })

  frame(function() {
    egg.style.top = '68%'
    egg.style.left = '40%'
    danererysContainer.style.left = '23%'
    egg.style.transform = 'rotate(40deg)'
  })

  frame(function() {
    egg.style.top = '66%'
    egg.style.left = '50%'
    danererysContainer.style.left = '27%'
    drogoContainer.style.left = '50%'
    egg.style.transform = 'rotate(42deg)'
  })

  frame(function() {
    egg.style.top = '64%'
    egg.style.left = '60%'
    danererysContainer.style.left = '31%'
    drogoContainer.style.left = '60%'
    egg.style.transform = 'rotate(44deg)'
  })

  frame(function() {
    egg.style.left = '70%'
    danererysContainer.style.left = '35%'
    drogoContainer.style.left = '70%'
    egg.style.transform = 'rotate(42deg)'
  })

  frame(function() {
    egg.style.left = '80%'
    danererysContainer.style.left = '38%'
    drogoContainer.style.left = '80%'
  })

  frame(function() {
    egg.style.left = '90%'
    danererysContainer.style.left = '40%'
    drogoContainer.style.left = '90%'
  })

  // End Stage direction 3
  frame(function() {
    egg.style.left = '100%'
    danererysContainer.style.left = '42%'
    drogoContainer.style.left = '100%'
    egg.style.transform = 'rotate(10deg)'
  })

}
