import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m7b3m4blq.css';
import '../../css/t/tpe61zbnm.css';
import '../../css/i/i7jq6qbvv.css';
import '../../css/i/ic311g-3b.css';
import '../../css/g/g2q97fkvb.css';
import '../../css/x/xsqu8mb8m.css';
import '../../css/w/w7x_-yz6y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><linearGradient id="SVGqVgFEbok" x1="1.5" x2="22.5" y1="2.5" y2="21.99" gradientUnits="userSpaceOnUse"><stop offset="0" class="m7b3m4blq"/><stop offset=".28" class="tpe61zbnm"/><stop offset=".5" class="m7b3m4blq"/><stop offset=".78" class="i7jq6qbvv"/><stop offset="1" class="m7b3m4blq"/></linearGradient></defs><path class="ic311g-3b wm-k"/><path stroke="url(#SVGqVgFEbok)" class="g2q97fkvb wm-s"/><path class="wm-shine xsqu8mb8m"/><path class="w7x_-yz6y wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-lunar:love-letter"} {...others} />);
}

export default Component;
