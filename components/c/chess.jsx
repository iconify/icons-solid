import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/n/niei7hb4a.css';
import '../../css/l/l27ocga3a.css';
import '../../css/h/hoy9m-ghx.css';
import '../../css/d/dng-92-9g.css';
import '../../css/z/zhc0_o10z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><linearGradient id="SVGfZNU8cLA" x1="9.69" x2="13.69" y1="1.51" y2="22.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="niei7hb4a wm-k"/><path class="l27ocga3a wm-deco"/><path class="hoy9m-ghx wm-k"/><path fill="url(#SVGfZNU8cLA)" class="dng-92-9g wm-k"/><path class="wm-shadow zhc0_o10z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-valentine:chess"} {...others} />);
}

export default Component;
