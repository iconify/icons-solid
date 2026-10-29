import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rwqrd6bhl.css';
import '../../css/u/urdsoyirw.css';
import '../../css/a/avpzadctt.css';
import '../../css/m/mf9uru4nl.css';
import '../../css/t/tpilturcn.css';
import '../../css/p/ptaysb6qr.css';
import '../../css/t/thqmr4bdj.css';
import '../../css/q/qzs_m8v5z.css';
import '../../css/l/lddjb0bfj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><linearGradient id="SVGJYxrvbPj" x1="11" x2="11" y1="2" y2="22" gradientUnits="userSpaceOnUse"><stop offset="0" class="rwqrd6bhl"/><stop offset="1" class="urdsoyirw"/></linearGradient></defs><path class="avpzadctt wm-shadow"/><path fill="url(#SVGJYxrvbPj)" class="mf9uru4nl wm-k"/><path class="tpilturcn wm-k"/><path class="ptaysb6qr wm-a"/><path class="thqmr4bdj wm-shine"/><path class="qzs_m8v5z wm-deco"/><path class="lddjb0bfj wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-halloween:love-scroll"} {...others} />);
}

export default Component;
