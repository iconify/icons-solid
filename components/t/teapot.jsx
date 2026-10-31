import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m7b3m4blq.css';
import '../../css/t/tpe61zbnm.css';
import '../../css/i/i7jq6qbvv.css';
import '../../css/l/la_ig1zrc.css';
import '../../css/i/iabfllk4f.css';
import '../../css/c/cfwv2n6zg.css';
import '../../css/j/j_2xfcm9m.css';
import '../../css/c/csh35dbvz.css';
import '../../css/u/ubx3racak.css';
import '../../css/s/sqvxsve2u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><linearGradient id="SVGhpe0BeOB" x1="1.5" x2="22.54" y1="2.5" y2="21.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="m7b3m4blq"/><stop offset=".28" class="tpe61zbnm"/><stop offset=".5" class="m7b3m4blq"/><stop offset=".78" class="i7jq6qbvv"/><stop offset="1" class="m7b3m4blq"/></linearGradient></defs><path class="la_ig1zrc wm-k"/><path fill="url(#SVGhpe0BeOB)" class="iabfllk4f wm-a"/><path fill="url(#SVGhpe0BeOB)" class="cfwv2n6zg wm-s"/><path class="j_2xfcm9m wm-shine"/><path class="csh35dbvz wm-shine"/><path class="ubx3racak wm-deco"/><path class="sqvxsve2u wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-lunar:teapot"} {...others} />);
}

export default Component;
