import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/g/gknac85ax.css';
import '../../css/k/kwh6s4-xz.css';
import '../../css/s/saiqidb6i.css';
import '../../css/j/j0t8yacod.css';
import '../../css/k/k92n5ymtu.css';
import '../../css/v/vhd_e5b3k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><linearGradient id="SVGv5VBkehs" x1="10" x2="14" y1="4.5" y2="20.99" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="gknac85ax wm-k"/><path class="kwh6s4-xz wm-k"/><path fill="url(#SVGv5VBkehs)" class="saiqidb6i wm-k"/><path class="j0t8yacod wm-shadow"/><path class="k92n5ymtu wm-shine"/><path class="vhd_e5b3k wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-valentine:bike"} {...others} />);
}

export default Component;
