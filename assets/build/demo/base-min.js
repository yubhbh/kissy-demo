KISSY.add("demo/base",function(e,s,a){var n=e.all,d=null,m=n("#J_Tips"),t=n("#J_List"),c=n("#J_Code"),r=n("#J_Method"),o=n("#J_Config"),i=function(){this._bind()};return i._data={},i.prototype._set=function(e,s){i._data[e]=s},i.prototype._get=function(e){return i._data[e]},i.prototype._bind=function(){var s=this;s.el&&s.events&&e.each(s.events,function(e,a){if(a&&e&&~a.indexOf(" ")){var d=a.replace(" ","^").split("^"),m=d[0],t=d[1];n(s.el).delegate(m,t,s[e],s)}})},i.prototype._ajax=function(e,s,d,m){var t=this,c=n(e.currentTarget),r=c.attr("id"),o=c.one("i"),i=o.attr("class");c.removeAttr("id"),c.addClass("disabled"),o.removeAttr("class"),o.addClass("icon-spinner icon-spin"),a.post(s,d,function(e){c.attr("id",r),c.removeClass("disabled"),o.removeAttr("class"),o.addClass(i),e.status?t._tips(!0,e.message):t._tips(!1,e.message),m&&m(e)})},i.prototype._tips=function(e,s){d&&clearTimeout(d),e?(m.removeClass("error"),m.html('<i class="icon-ok"></i>'+s)):(m.addClass("error"),m.html('<i class="icon-remove"></i>'+s)),m.slideDown(.2),d=setTimeout(function(){m.html("").slideUp(.2)},2e3)},i.prototype._render=function(e){switch(e){case"list":t.show(),c.hide(),r.show(),o.hide();break;case"code":t.hide(),c.show(),r.hide(),o.show()}},i.prototype._makeQueryId=function(){return this._get("module")+"."+this._get("method")},i},{requires:["node","ajax"]});