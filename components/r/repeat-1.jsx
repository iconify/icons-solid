import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/k/k398l6b2c.css';
import '../../css/s/s9v65frfc.css';
import '../../css/z/z35vvjb1c.css';
import '../../css/v/v00xtep-a.css';
import '../../css/p/ptom3tb5l.css';
import '../../css/w/w1nswh2zd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><linearGradient id="SVGtwbKocpe" x1="10" x2="14" y1="1" y2="23" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="k398l6b2c wm-k"/><path class="s9v65frfc wm-s"/><path class="wm-deco z35vvjb1c"/><path fill="url(#SVGtwbKocpe)" class="v00xtep-a wm-k"/><path class="ptom3tb5l wm-s"/><path class="w1nswh2zd wm-shadow"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-valentine:repeat-1"} {...others} />);
}

export default Component;
