function observe(target, interval) {
  setInterval(function() {
    var self = arguments.callee;
    var req = window.ActiveXObject ? new ActiveXObject('Microsoft.XMLHTTP') : new XMLHttpRequest();
    req.open('GET',target,true);
    req.onreadystatechange = function() {
      (self.old && req.readyState == 4 && req.responseText != self.old) && location.reload(true);
      if(req.readyState == 4) self.old = req.responseText;
    }
    req.send(null);
  }, interval * 1000);
}
