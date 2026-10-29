import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/afp7nkbnh.css';
import '../../css/v/v3d79ebwf.css';
import '../../css/i/isdxdvb6b.css';
import '../../css/h/h_lj-dphw.css';
import '../../css/g/gxg6zlkpv.css';
import '../../css/p/pw_wcwb1x.css';
import '../../css/u/uwe9rrv_c.css';
import '../../css/x/x291lll7z.css';
import '../../css/q/qwrzm7q7t.css';
import '../../css/f/f_7w8se3m.css';
import '../../css/p/pdoflpbmu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="afp7nkbnh wm-shadow"/><path class="v3d79ebwf wm-k"/><path class="isdxdvb6b wm-k"/><path class="h_lj-dphw wm-k"/><path class="gxg6zlkpv wm-k"/><path class="pw_wcwb1x wm-k"/><path class="uwe9rrv_c wm-k"/><path class="wm-k x291lll7z"/><path class="qwrzm7q7t wm-k"/><path class="f_7w8se3m wm-k"/><path class="pdoflpbmu wm-shine"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:tree-pine"} {...others} />);
}

export default Component;
