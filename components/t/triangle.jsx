import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/z/z1mez3-3x.css';
import '../../css/i/i0xjmsbyo.css';
import '../../css/n/ndherubex.css';
import '../../css/p/p2zihgbtb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><linearGradient id="SVG0C2E9dsR" x1="10" x2="14" y1="2.01" y2="21.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="wm-k z1mez3-3x"/><path class="i0xjmsbyo wm-deco"/><path fill="url(#SVG0C2E9dsR)" class="ndherubex wm-k"/><path class="p2zihgbtb wm-shadow"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-valentine:triangle"} {...others} />);
}

export default Component;
