chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.executeScript({
    code: 'var annotations = document.getElementsByClassName("video-annotations");'+
						'for (var i = annotations.length - 1; i >= 0; i--) {'+
							'annotations[i].style.display = "none";'+
						'};'
	});
});