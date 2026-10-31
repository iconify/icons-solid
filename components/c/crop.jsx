import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/r/r2b42ygvs.css';
import '../../css/j/j-yf9sb9a.css';
import '../../css/b/b-zgyyocs.css';
import '../../css/d/dexguac2h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><linearGradient id="SVGykVPrcod" x1="10" x2="14" y1="1.52" y2="22.49" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="r2b42ygvs wm-k"/><path class="j-yf9sb9a wm-deco"/><path fill="url(#SVGykVPrcod)" class="b-zgyyocs wm-k"/><path class="dexguac2h wm-shadow"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-valentine:crop"} {...others} />);
}

export default Component;
