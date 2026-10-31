import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/t/ttzwb2ald.css';
import '../../css/i/i-czlvb-m.css';
import '../../css/s/sl55fxbeh.css';
import '../../css/v/veaskoseg.css';
import '../../css/c/c7tjwqbqx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><linearGradient id="SVGMyifwe1z" x1="10.01" x2="14.01" y1="5.5" y2="18.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="ttzwb2ald wm-k"/><path class="i-czlvb-m wm-deco"/><path class="sl55fxbeh wm-k"/><path fill="url(#SVGMyifwe1z)" class="veaskoseg wm-k"/><path class="c7tjwqbqx wm-shadow"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-valentine:vr-headset"} {...others} />);
}

export default Component;
