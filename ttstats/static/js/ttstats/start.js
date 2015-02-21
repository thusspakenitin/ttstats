goog.provide("ttstats.start");
goog.require("goog.dom")

ttstats.start=function(){
	var a = goog.dom.createDom("div , {'class':'container'}");
	var bodylist = goog.dom.getElementsByTagNameAndClass('body');
	var body = bodylist[0];
	goog.dom.appendChild(body,a);
}

ttstats.start();
goog.exportSymbol('ttstats.start',ttstats.start);

