import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u2067-cpi.css';
import '../../css/s/sfe6akjwy.css';
import '../../css/e/e44na-bsd.css';
import '../../css/q/qpnzhf3ug.css';
import '../../css/z/ztwmlfhuc.css';
import '../../css/f/fb6124b8o.css';
import '../../css/h/huzhslb3u.css';
import '../../css/b/behgjkblz.css';
import '../../css/h/hg3b82b4h.css';
import '../../css/e/ehzkprbkl.css';
import '../../css/i/iy5cj8xmu.css';
import '../../css/q/q_frj4b5x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="u2067-cpi wm-shadow"/><path class="sfe6akjwy wm-k"/><path class="e44na-bsd wm-k"/><path class="qpnzhf3ug wm-k"/><path class="wm-k ztwmlfhuc"/><path class="fb6124b8o wm-k"/><path class="huzhslb3u wm-k"/><path class="behgjkblz wm-k"/><path class="hg3b82b4h wm-k"/><path class="ehzkprbkl wm-k"/><path class="iy5cj8xmu wm-k"/><path class="q_frj4b5x wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-gothic:play"} {...others} />);
}

export default Component;
