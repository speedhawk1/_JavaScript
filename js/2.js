(function (z) {
    var eU = function () {
        z.Q.call(this)
    };
    var fU = function () {
        var a = (0, window.$)(".QRCode-card"), b = (0, window.$)(".QRCode-toggleButton"), c = (0, window.$)(".QRCode-toggleButtonText", b);
        (0, window.$)("body").on("click", function (d) {
            a.is(":visible") ? Boolean((0, window.$)(d.target).closest(a).length) || (a.addClass("fadeOutDown").onTransitionEnd(function () {
                a.hide().removeClass("fadeOutDown")
            }, 200), c.text("涓嬭浇鐭ヤ箮 App")) : Boolean((0, window.$)(d.target).closest(b).length) && (a.addClass("fadeInUp").show().onTransitionEnd(function () {
                a.removeClass("fadeInUp")
            }, 200),
                c.text("鍏抽棴浜岀淮鐮�"), z.X.trackEvent(d.target, {action: "Download", element: "Button"}))
        })
    };
    var gU = function () {
        var a = (0, window.$)(".sign-flow");
        if (a.length) {
            var b = new hU;
            b.w(a[0]);
            b.g("trackRequested", function (a) {
                a.preventDefault();
                a.label = "home_default";
                z.Ai(a)
            })
        }
    };
    var iU = function () {
        function a() {
            var a = window.particlesJS;
            a && ((0, window.$)("\x3cdiv\x3e", {id: "particles"}).appendTo("body"), a("particles", c))
        }

        var b = !!window.HTMLCanvasElement, c = {
            particles: {
                number: {value: 20, density: {enable: !0, value_area: 1E3}},
                color: {value: "#e1e1e1"},
                shape: {
                    type: "circle",
                    stroke: {width: 0, color: "#000000"},
                    polygon: {nb_sides: 5},
                    image: {src: "img/github.svg", width: 100, height: 100}
                },
                opacity: {value: .5, random: !1, anim: {enable: !1, speed: 1, opacity_min: .1, sync: !1}},
                size: {
                    value: 15, random: !0, anim: {
                        enable: !1,
                        speed: 180, size_min: .1, sync: !1
                    }
                },
                line_linked: {enable: !0, distance: 650, color: "#cfcfcf", opacity: .26, width: 1},
                move: {
                    enable: !0,
                    speed: 2,
                    direction: "none",
                    random: !0,
                    straight: !1,
                    out_mode: "out",
                    bounce: !1,
                    attract: {enable: !1, rotateX: 600, rotateY: 1200}
                }
            }, interactivity: {
                detect_on: "canvas",
                events: {onhover: {enable: !1, mode: "repulse"}, onclick: {enable: !1, mode: "push"}, resize: !0},
                modes: {
                    grab: {distance: 400, line_linked: {opacity: 1}},
                    bubble: {distance: 400, size: 40, duration: 2, opacity: 8, speed: 3},
                    repulse: {distance: 200, duration: .4},
                    push: {particles_nb: 4},
                    remove: {particles_nb: 2}
                }
            }, retina_detect: !0
        };
        (0, window.$)(function () {
            b && window.$.ajax({
                url: "/static/revved/components/particles.js/particles.min.00debcf6.js",
                dataType: "script",
                cache: !0
            }).then(a)
        })
    };
    var hU = function () {
        z.Q.call(this)
    };
    var jU = function (a) {
        return !/^\+?[0-9]+$/.test(a)
    };
    var kU = function (a, b) {
        a.account && (a[b] = a.account, delete a.account)
    };
    var lU = function (a) {
        var b = (0, window.$)(".index-tab-navs a", a.m()), c = (0, z.t)(function () {
            var a = window.location.hash || b.filter(".active").attr("href"), c = b.filter(function () {
                return (0, window.$)(this).attr("href") === a
            });
            c.addClass("active").siblings().removeClass("active");
            c.parent().attr("data-active-index", c.index());
            "#signin" === a ? this.fi.is(":visible") || (this.ke.hide(), this.fi.show(), this.am()) : "#signup" !== a || this.ke.is(":visible") || (this.fi.hide(), this.ke.show(), this.am())
        }, a);
        a.o().g(window, "hashchange",
            c);
        c();
        b.click(function (a) {
            z.X.trackEvent(a.target, {
                action: "OpenUrl",
                element: "Link",
                element_name: "#signin" === (0, window.$)(a.target).attr("href") ? "SignIn" : "SignUp"
            }, {link: {url: a.target.href, anchor: a.target.innerText}})
        })
    };
    var mU = function (a) {
        a.fi = (0, window.$)(".view-signin", a.m());
        var b = (0, window.$)("form", a.fi), c = (0, window.$)("button.submit", b);
        b.validate(window.$.extend({}, z.Ym, {
            submitHandler: z.tk(c, window.$.proxy(a.qB, a)),
            invalidHandler: function (b, c) {
                z.X.trackEvent(a.fi.get(0), {action: "StatusReport"}, {
                    status: {
                        result: "Fail",
                        error_msg: window.$.map(c.errorList, function (a) {
                            return a.element.name + ":" + a.message
                        }),
                        event: {action: "SignIn", element: "Button"}
                    }, account: a.zd("login")
                })
            }
        }));
        var d = (0, window.$)('input[name\x3d"account"]',
            b);
        (0, window.$)(".unable-login", a.fi).click(function () {
            (new z.Ek(d.val())).show();
            z.X.trackEvent(this, {action: "Click", element: "Button", element_name: "UnableSignIn"})
        });
        b = (0, window.$)(".captcha-module, .Captcha", b).get(0);
        a.uu = new z.ck("login");
        a.uu.w(b);
        z.gk(a.uu)
    };
    var nU = function (a) {
        a.ke = (0, window.$)(".view-signup", a.m());
        var b = (0, window.$)("form", a.ke);
        a.Xh = !(0, window.$)('input[name\x3d"phone_num"]', b).length;
        var c = (0, window.$)("button.submit", b);
        b.validate(window.$.extend({}, z.Ym, {
            submitHandler: z.tk(c, window.$.proxy(a.iq, a)),
            invalidHandler: function (b, c) {
                z.X.trackEvent(a.ke.get(0), {action: "StatusReport"}, {
                    status: {
                        result: "Fail",
                        error_msg: window.$.map(c.errorList, function (a) {
                            return a.element.name + ":" + a.message
                        }),
                        event: {action: "SignUp", element: "Button"}
                    }, account: a.zd("register")
                })
            }
        }));
        var d = (0, window.$)('input[name\x3d"account"]', b);
        a.ke.on("click", ".switch-to-login", function () {
            window.location.hash = "#signin";
            var b = d.val();
            b && (0, window.$)('input[name\x3d"account"]', a.CZ).val(b)
        }).on("change", ".agreement input", function () {
            var a = (0, window.$)(this);
            a.is(":checked") && a.parents(".agreement").find(".error").remove()
        });
        c = (0, window.$)(".input-wrapper[data-type]", b).get(0);
        a.uq = new z.ck("register");
        a.uq.w(c);
        z.gk(a.uq);
        a.An = new z.Tk(b);
        a.An.start()
    };
    var oU = function () {
        var a = z.aj.get("accountcallback");
        z.aj.remove("accountcallback");
        if (a) {
            a = (0, window.decodeURIComponent)(a);
            try {
                var b = JSON.parse(a);
                z.W.dispatchEvent(new z.Yj("accountcallback", b))
            } catch (c) {
            }
        }
    };
    z.y(eU, z.Q);
    eU.prototype.init = function () {
        this.w(window.document.body)
    };
    eU.prototype.C = function (a) {
        eU.v.C.call(this, a);
        gU();
        iU();
        fU();
        z.Ai({category: "view_home", action: "visit_home"})
    };
    z.y(hU, z.Q);
    z.e = hU.prototype;
    z.e.C = function () {
        hU.v.C.call(this);
        this.gA()
    };
    z.e.qa = function (a) {
        this.dispatchEvent(window.$.extend({type: "trackRequested"}, a))
    };
    z.e.gA = function () {
        function a(a, b) {
            (0, window.$)(":submit", a).click(function () {
                return b(a)
            });
            (0, window.$)("keydown", a).click(function (c) {
                if (13 === c.keyCode)return b(a)
            })
        }

        mU(this);
        nU(this);
        this.ip();
        oU();
        this.am();
        lU(this);
        var b = this, c = this.m();
        a((0, window.$)(".view-signin form", c), function (a) {
            var c = a.Gc().account, g = jU(c);
            b.qa({
                category: "sign_in",
                action: c ? "click_sign_in_submit_" + (g ? "email" : "phone") : "click_sign_in_submit_no_channel"
            });
            z.X.trackEvent(a, {action: "SignIn", element: "Button"}, {account: b.zd("login")})
        });
        a((0, window.$)(".view-signup form", c), function (a) {
            var c = a.Gc(), c = c.phone_num || c.account, g = b.Xh ? jU(c) : !1;
            b.qa({
                category: "sign_up",
                action: c ? b.Xh ? "click_sign_up_submit_" + (g ? "email" : "phone") : "click_sign_up_submit_phone" : "click_sign_up_submit_no_channel"
            });
            z.X.trackEvent(a, {action: "SignUp", element: "Button"}, {account: b.zd("register")})
        });
        (0, window.$)(".js-bindweibo", c).click(function () {
            b.qa({category: "sign_in_or_sign_up", action: "click_sign_with_weibo_start"});
            z.X.trackEvent(this, {action: "SignIn", element: "Button"},
                {account: {type: "Weibo"}});
            z.Zj("sina")
        });
        (0, window.$)(".js-bindqq", c).click(function () {
            b.qa({category: "sign_in_or_sign_up", action: "click_sign_with_qq_start"});
            z.X.trackEvent(this, {action: "SignIn", element: "Button"}, {account: {type: "QQ"}});
            z.Zj("qq")
        });
        (0, window.$)(".js-bindwechat", c).click(function () {
            b.qa({category: "sign_in_or_sign_up", action: "click_sign_with_wechat_start"});
            z.X.trackEvent(this, {action: "SignIn", element: "Button"}, {account: {type: "Wechat"}});
            z.Zj("wechat")
        });
        (0, window.$)(".js-toggle-sns-buttons").click(function (a) {
            var b =
                (0, window.$)(".sns-buttons");
            b.hasClass("is-visible") ? b.onTransitionEnd(function () {
                b.css("visibility", "hidden")
            }, 250).removeClass("is-visible") : (z.X.trackEvent(a.target, {
                action: "Click",
                element: "Button",
                element_name: "SNSSignIn"
            }), b.css("visibility", "visible").addClass("is-visible"))
        })
    };
    z.e.zd = function (a) {
        var b = "register" === a ? (0, window.$)("form", this.ke) : (0, window.$)("form", this.fi), c = {type: "Zhihu"};
        "register" === a && (c.name = (0, window.$)('[name\x3d"fullname"]', b).val() || null);
        a = (0, window.$)('[name\x3d"account"]', b).val();
        jU(a) ? c.email = a || null : c.phone = a || null;
        return c
    };
    z.e.qB = function (a) {
        var b = this, c = (0, window.$)(a), d = c.Gc(), f = jU(d.account);
        this.qa({category: "sign_in", action: "sign_in_front_end_pass_" + (f ? "email" : "phone")});
        a = f ? "/login/email" : "/login/phone_num";
        z.Gk && (d.is_org_page = 1);
        f ? kU(d, "email") : kU(d, "phone_num");
        var g = this.uu.info();
        return window.$.post(a, d, function (a) {
            var k = a && !a.r;
            if (k)b.qa({
                Wc: !0,
                category: "sign_in",
                action: "sign_in_success_" + (f ? "email" : "phone")
            }), b.de(); else {
                var l = a.errcode;
                1991831 === l ? (l = new z.Ck({
                    data: {phone_num: d.phone_num, password: d.password},
                    tV: function (a) {
                        c.data("validator").showErrors(a)
                    }
                }), l.Gb(b), l.F(!0)) : 200001 === l ? (l = '鏈烘瀯甯愬彿\x3cspan\x3e 路 \x3c/span\x3e\x3ca href\x3d"/org/signin"\x3e鐐规鐧诲綍\x3c/a\x3e', z.Gk && (l = '涓汉甯愬彿\x3cspan\x3e 路 \x3c/span\x3e\x3ca href\x3d"/signin"\x3e鐐规鐧诲綍\x3c/a\x3e'), c.data("validator").showErrors({account: l})) : (z.gk(b.uu), c.data("validator").showErrors(a.data))
            }
            z.X.trackEvent(b.fi.get(0), {action: "StatusReport"}, Object.assign({
                status: {
                    result: k ? "Success" : "Fail", error_msg: a.data ? window.$.map(a.data, function (a, b) {
                        return b +
                            ":" + a
                    }) : null, event: {action: "SignIn", element: "Button"}
                }, account: b.zd("login")
            }, g))
        })
    };
    z.e.iq = function (a) {
        var b = this, c = this;
        a = (0, window.$)(a);
        var d = a.Gc(), f = c.Xh ? jU(d.account) : !1;
        c.qa({Wc: !0, category: "sign_up", action: "sign_up_front_end_pass_" + (f ? "email" : "phone")});
        var g = f ? "/register/email" : "/register/phone_num/validation";
        z.Gk && (f = !0, g = "/register/org");
        f ? kU(d, "email") : kU(d, "phone_num");
        var h = this.An.stop();
        d.userInfo = JSON.stringify(h);
        var k = a.data("validator"), l = c.uq.info();
        return window.$.post(g, d, function (a) {
            var g = a && !a.r;
            if (f)g ? (c.qa({Wc: !0, category: "sign_up", action: "sign_up_success_email"}),
                c.de()) : (z.gk(c.uq), k.showErrors(a.data)); else if (g) {
                var h = new z.zw(d);
                h.Gb(c);
                h.F(!0)
            } else z.gk(c.uq), c.Xh || kU(a.data, "phone_num"), k.showErrors(a.data);
            z.X.trackEvent(b.ke.get(0), {action: "StatusReport"}, Object.assign({
                status: {
                    result: g ? "Success" : "Fail",
                    error_msg: a.data ? window.$.map(a.data, function (a, b) {
                        return b + ":" + a
                    }) : null,
                    event: {action: "SignUp", element: "Button"}
                }, account: b.zd("register")
            }, l))
        })
    };
    z.e.am = function () {
        if (!z.wk) {
            var a = this.m();
            (0, window.setTimeout)(function () {
                (0, window.$)("input[placeholder]:visible", a).placeholder()
            }, 10)
        }
    };
    z.e.ip = function () {
        z.bk(this.o(), this.HU)
    };
    z.e.HU = function (a) {
        a = a.Rf;
        var b = {qqconn: "qq", wechat: "wechat", sina: "weibo"}[a.type];
        1 === a.login ? (this.qa({
            Wc: !0,
            category: "sign_in",
            action: "sign_in_success_" + b
        }), z.X.trackEvent((0, window.$)(".js-bind" + b), {action: "StatusReport"}, {
            status: {
                result: "Success",
                event: {action: "SignIn", element: "Button"}
            }, account: {type: {qqconn: "QQ", wechat: "Wechat", sina: "Weibo"}[a.type]}
        }), this.de()) : (a = new z.Lk(a), a.Gb(this), a.show())
    };
    z.e.de = function () {
        var a = (new z.th(window.location.href)).Xd().get("next");
        window.location.href = a ? a : "/"
    };
    z.x("ZH.entrySignPage", function () {
        (new eU).init()
    });
    z.lg("page-index");
}).call(this, __z_z__);
//# sourceURL=/static/revved/-/js/closure/page-index.c0050212.js