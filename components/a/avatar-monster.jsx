import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m7b3m4blq.css';
import '../../css/t/tpe61zbnm.css';
import '../../css/i/i7jq6qbvv.css';
import '../../css/m/mziionbdp.css';
import '../../css/t/ti4i59bjp.css';
import '../../css/s/sqap_ybcx.css';
import '../../css/o/olob5-bop.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><linearGradient id="SVGuemHUdCS" x1="2.01" x2="22" y1="2.5" y2="21.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="m7b3m4blq"/><stop offset=".28" class="tpe61zbnm"/><stop offset=".5" class="m7b3m4blq"/><stop offset=".78" class="i7jq6qbvv"/><stop offset="1" class="m7b3m4blq"/></linearGradient></defs><path class="mziionbdp wm-k"/><path stroke="url(#SVGuemHUdCS)" class="ti4i59bjp wm-s"/><path class="sqap_ybcx wm-shine"/><path class="olob5-bop wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-lunar:avatar-monster"} {...others} />);
}

export default Component;
