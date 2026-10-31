import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kd5-qhb2s.css';
import '../../css/q/qvjsnoblm.css';
import '../../css/y/yxmetmtyl.css';
import '../../css/p/p559dpbsa.css';
import '../../css/x/xqxvqbcpl.css';
import '../../css/n/nq_lmcbdm.css';
import '../../css/c/cuct6ubvc.css';
import '../../css/z/zhe8bebzs.css';
import '../../css/j/jtvtwx-7r.css';
import '../../css/r/ra-hv0b8p.css';
import '../../css/e/eonvsqbzu.css';
import '../../css/c/cz8ockb9r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><radialGradient id="SVGUCyTHtDA" cx="10.27" cy="10.12" r="12.53" gradientUnits="userSpaceOnUse"><stop offset="0" class="kd5-qhb2s"/><stop offset=".24" class="qvjsnoblm"/><stop offset=".66" class="qvjsnoblm"/><stop offset="1" class="yxmetmtyl"/></radialGradient><linearGradient id="SVGgxqbMdzd" x1="4.3" x2="19.7" y1="1.6" y2="9.4" gradientUnits="userSpaceOnUse"><stop offset="0" class="p559dpbsa"/><stop offset="1" class="xqxvqbcpl"/></linearGradient></defs><path class="nq_lmcbdm wm-shadow"/><path fill="url(#SVGUCyTHtDA)" class="cuct6ubvc wm-k"/><path class="wm-k zhe8bebzs"/><path fill="url(#SVGgxqbMdzd)" class="jtvtwx-7r wm-a"/><path class="ra-hv0b8p wm-a"/><path class="eonvsqbzu wm-a"/><path class="cz8ockb9r wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-rangoli:avatar-person-headphones"} {...others} />);
}

export default Component;
