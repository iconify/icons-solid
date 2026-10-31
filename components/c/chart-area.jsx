import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m7b3m4blq.css';
import '../../css/t/tpe61zbnm.css';
import '../../css/i/i7jq6qbvv.css';
import '../../css/z/zxl0mrrnu.css';
import '../../css/z/zvmzjbbls.css';
import '../../css/l/l_sbxrcie.css';
import '../../css/f/fpm60acnz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><linearGradient id="SVGKCideeYv" x1="2.5" x2="21.5" y1="2.51" y2="21.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="m7b3m4blq"/><stop offset=".28" class="tpe61zbnm"/><stop offset=".5" class="m7b3m4blq"/><stop offset=".78" class="i7jq6qbvv"/><stop offset="1" class="m7b3m4blq"/></linearGradient></defs><path stroke="url(#SVGKCideeYv)" class="wm-k zxl0mrrnu"/><path fill="url(#SVGKCideeYv)" class="wm-a zvmzjbbls"/><path class="l_sbxrcie wm-shine"/><path class="fpm60acnz wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-lunar:chart-area"} {...others} />);
}

export default Component;
