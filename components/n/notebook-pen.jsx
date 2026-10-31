import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m7b3m4blq.css';
import '../../css/t/tpe61zbnm.css';
import '../../css/i/i7jq6qbvv.css';
import '../../css/r/rpnmw1duq.css';
import '../../css/u/uqqnvub3u.css';
import '../../css/a/aeswvd3yn.css';
import '../../css/s/s9q1tbx1w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><linearGradient id="SVGuMpZjcKZ" x1="2.5" x2="21.88" y1="1.51" y2="22.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="m7b3m4blq"/><stop offset=".28" class="tpe61zbnm"/><stop offset=".5" class="m7b3m4blq"/><stop offset=".78" class="i7jq6qbvv"/><stop offset="1" class="m7b3m4blq"/></linearGradient></defs><path class="rpnmw1duq wm-k"/><path stroke="url(#SVGuMpZjcKZ)" class="uqqnvub3u wm-s"/><path class="aeswvd3yn wm-shine"/><path class="s9q1tbx1w wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-lunar:notebook-pen"} {...others} />);
}

export default Component;
