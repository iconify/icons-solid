import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m7b3m4blq.css';
import '../../css/t/tpe61zbnm.css';
import '../../css/i/i7jq6qbvv.css';
import '../../css/h/hz6olt-sr.css';
import '../../css/d/dnlo2unkp.css';
import '../../css/w/wo-v982oa.css';
import '../../css/u/ue85jib4r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><linearGradient id="SVGH6yDYbMN" x1="2.47" x2="22.28" y1=".75" y2="22.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="m7b3m4blq"/><stop offset=".28" class="tpe61zbnm"/><stop offset=".5" class="m7b3m4blq"/><stop offset=".78" class="i7jq6qbvv"/><stop offset="1" class="m7b3m4blq"/></linearGradient></defs><path class="hz6olt-sr wm-k"/><path fill="url(#SVGH6yDYbMN)" class="dnlo2unkp wm-a"/><path class="wm-shine wo-v982oa"/><path class="ue85jib4r wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-lunar:avatar-unicorn"} {...others} />);
}

export default Component;
