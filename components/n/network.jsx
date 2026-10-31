import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/i/ivf38zbbs.css';
import '../../css/p/pvto1dbef.css';
import '../../css/o/omsewze1c.css';
import '../../css/r/r2lr0ewgx.css';
import '../../css/b/b7juuobcu.css';
import '../../css/f/fjkx8pn2m.css';
import '../../css/d/dkqk0rb4g.css';
import '../../css/u/u1xeisb1h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><linearGradient id="SVGRXRkMbdA" x1="9.99" x2="13.99" y1="1.51" y2="21.99" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="ivf38zbbs wm-k"/><path class="pvto1dbef wm-a"/><path class="omsewze1c wm-deco"/><path fill="url(#SVGRXRkMbdA)" class="r2lr0ewgx wm-k"/><path class="b7juuobcu wm-a"/><path class="fjkx8pn2m wm-shadow"/><path class="dkqk0rb4g wm-shine"/><path class="u1xeisb1h wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-valentine:network"} {...others} />);
}

export default Component;
