import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m7b3m4blq.css';
import '../../css/t/tpe61zbnm.css';
import '../../css/i/i7jq6qbvv.css';
import '../../css/p/p8p5rwjre.css';
import '../../css/m/mgs9-4dhh.css';
import '../../css/d/daeojmhiz.css';
import '../../css/j/jbpuep3iw.css';
import '../../css/i/i5u_sgbdm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><linearGradient id="SVGN7zNMnmD" x1="3.39" x2="19.98" y1="1.5" y2="22.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="m7b3m4blq"/><stop offset=".28" class="tpe61zbnm"/><stop offset=".5" class="m7b3m4blq"/><stop offset=".78" class="i7jq6qbvv"/><stop offset="1" class="m7b3m4blq"/></linearGradient></defs><path fill="url(#SVGN7zNMnmD)" class="p8p5rwjre wm-k"/><path class="mgs9-4dhh wm-shine"/><path class="daeojmhiz wm-shine"/><path class="jbpuep3iw wm-shine"/><path class="i5u_sgbdm wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-lunar:chess"} {...others} />);
}

export default Component;
