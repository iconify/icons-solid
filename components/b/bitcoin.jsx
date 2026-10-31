import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/k/koh9d7bjo.css';
import '../../css/q/qxzfzbcla.css';
import '../../css/i/i06wpl4kz.css';
import '../../css/l/loxway67g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><linearGradient id="SVGCkjHmdou" x1="8.87" x2="12.87" y1="1.5" y2="22.49" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="koh9d7bjo wm-k"/><path class="qxzfzbcla wm-deco"/><path fill="url(#SVGCkjHmdou)" class="i06wpl4kz wm-k"/><path class="loxway67g wm-shadow"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-valentine:bitcoin"} {...others} />);
}

export default Component;
