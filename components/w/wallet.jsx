import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m7b3m4blq.css';
import '../../css/t/tpe61zbnm.css';
import '../../css/i/i7jq6qbvv.css';
import '../../css/b/bawferz_f.css';
import '../../css/p/p7q289qlb.css';
import '../../css/f/fmpcyyben.css';
import '../../css/n/nccctgb0e.css';
import '../../css/e/e_4329u-n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><linearGradient id="SVGovNS4dtG" x1="2.01" x2="21.99" y1="3" y2="21" gradientUnits="userSpaceOnUse"><stop offset="0" class="m7b3m4blq"/><stop offset=".28" class="tpe61zbnm"/><stop offset=".5" class="m7b3m4blq"/><stop offset=".78" class="i7jq6qbvv"/><stop offset="1" class="m7b3m4blq"/></linearGradient></defs><path fill="url(#SVGovNS4dtG)" class="bawferz_f wm-k"/><path class="p7q289qlb wm-shine"/><path class="fmpcyyben wm-shine"/><path class="nccctgb0e wm-shine"/><path class="e_4329u-n wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-lunar:wallet"} {...others} />);
}

export default Component;
