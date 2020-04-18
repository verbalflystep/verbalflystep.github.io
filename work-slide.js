let pageNumber = 0

const pages = [
  { mv: '<div class="videoWrapper"><iframe width="560" height="315" src="https://www.youtube.com/embed/voU1DufVXF0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>'},
  { mv: '<iframe width="560" height="315" src="https://www.youtube.com/embed/ar7FUMttGbY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>' },
  { mv: '<iframe width="560" height="315" src="https://www.youtube.com/embed/GmpbIFSC46w" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'},
  { mv:'<iframe width="560" height="315" src="https://www.youtube.com/embed/pfYd8wDq424" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'},
  { mv: '<iframe width="560" height="315" src="https://www.youtube.com/embed/t8TXG7Wpq1M" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'},
  { mv:'<iframe width="560" height="315" src="https://www.youtube.com/embed/beb8o5iPVXY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'},
  { mv:'<iframe width="560" height="315" src="https://www.youtube.com/embed/Y3m4Fx2u3-8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'},
  { mv:'<iframe width="560" height="315" src="https://www.youtube.com/embed/NrEc3AuW68I" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'},
  { mv:'<iframe width="560" height="315" src="https://www.youtube.com/embed/AmO7rAoKaBY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'},
  { mv:'<iframe width="560" height="315" src="https://www.youtube.com/embed/Qz2Wzl24Q8A" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'},
  { mv:'<iframe width="560" height="315" src="https://www.youtube.com/embed/Ez2xuHR-bMg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'},
  { mv:'<iframe width="560" height="315" src="https://www.youtube.com/embed/b1pqa1wr4HY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'},
  { mv:'<iframe width="560" height="315" src="https://www.youtube.com/embed/hcMihL4l9IU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'},
  { mv:'<iframe width="560" height="315" src="https://www.youtube.com/embed/_z7erRWcKBI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'},
  { mv:'<iframe width="560" height="315" src="https://www.youtube.com/embed/b6Nk_vuKLtw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'},
  { mv:'<iframe width="560" height="315" src="https://www.youtube.com/embed/HjC0WownLRM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'},
  { mv:'<iframe width="560" height="315" src="https://www.youtube.com/embed/IkRp9X8RIUY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'}
]

const outputTag = document.querySelector('.youtube-responsive')

const random = function () {
  pageNumber = Math.floor( Math.random() * pages.length )
  outputTag.style.paddingBottom =  "56.25%"
  updateSection ()
}

const updateSection = function() {
  outputTag.innerHTML = pages [pageNumber].mv
}

document.addEventListener('scroll', function () {
 	random ()
})

document.addEventListener('wheel', function () {
  random ()
})

document.addEventListener('keyup', function () {
	random ()
  
})




