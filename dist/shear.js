parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"axoq":[function(require,module,exports) {
"use strict";function e(t){var n=[];return t.nodeType===Node.TEXT_NODE&&n.push(t),[].slice.call(t.childNodes).map(function(t){n=n.concat(e(t))}),n}function t(t,n){var r=document.createRange(),o=e(t),u=null,a=0;return r.setStart(o[0],0),function(){for(var e=0;e<o.length;e++)for(var t=0;t<o[e].length;t++){r.setEnd(o[e],t);var c=r.getBoundingClientRect().height;if(c!==u&&(a++,u=c),a>n)return r.setStart(o[e],t),void r.setEnd(o[e],t)}}(),r}Object.defineProperty(exports,"__esModule",{value:!0}),exports.getTextNodes=e,exports.default=t;
},{}],"0w3+":[function(require,module,exports) {
"use strict";var e=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};Object.defineProperty(exports,"__esModule",{value:!0});var t=e(require("./edge")),n=!("modify"in window.getSelection());function r(e){var t=document.createElement("div");return t.innerHTML=e.trim(),t.firstChild}function i(e){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,l=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;if(!e.childNodes.length)return{isCuted:!1,fullHTML:"",cutedHTML:"",cutedWithAfterHTML:""};var o=window.getSelection(),d=e.innerHTML,a=e.getBoundingClientRect().height;o.collapse(e,0);var u=void 0;if(n)u=t.default(e,i);else{for(var c=0;c<i;c++)if(o.modify("extend","right","character"),o.modify("extend","right","lineboundary"),!e.contains(o.focusNode)){o.selectAllChildren(e);break}o.collapseToEnd(),u=o.getRangeAt(0).cloneRange()}o.selectAllChildren(e),u.setEnd(o.getRangeAt(0).endContainer,o.getRangeAt(0).endOffset),o.removeAllRanges(),u.cloneRange().deleteContents();var g=e.innerHTML,s=d!==g,f=g,h=e.getBoundingClientRect().height;if(h<a&&l){var v=r(l),M=t.getTextNodes(e),R=M[M.length-1],T=R.length,m=document.createRange();m.setStart(R,T),m.setEnd(R,T),m.insertNode(v),function(){for(var t=M.length-1;t>=0;t--)for(var n=M[t].length-1;n>=0;n--){if(e.getBoundingClientRect().height<=h)return;var r=document.createRange();r.setStart(M[t],n),r.setEnd(M[t],n+1),r.deleteContents()}}(),f=e.innerHTML}return o.removeAllRanges(),{isCuted:s,fullHTML:d,cutedHTML:g,cutedWithAfterHTML:f}}exports.default=i;
},{"./edge":"axoq"}]},{},["0w3+"], null)
//# sourceMappingURL=/shear.map