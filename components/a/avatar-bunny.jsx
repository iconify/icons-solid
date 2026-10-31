import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m7b3m4blq.css';
import '../../css/t/tpe61zbnm.css';
import '../../css/i/i7jq6qbvv.css';
import '../../css/d/dyfj1ub6p.css';
import '../../css/l/losxuxkvp.css';
import '../../css/z/zqcexfauw.css';
import '../../css/j/jd8rkn48x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><linearGradient id="SVGYBT2JcSv" x1="4.75" x2="19.25" y1=".89" y2="22.25" gradientUnits="userSpaceOnUse"><stop offset="0" class="m7b3m4blq"/><stop offset=".28" class="tpe61zbnm"/><stop offset=".5" class="m7b3m4blq"/><stop offset=".78" class="i7jq6qbvv"/><stop offset="1" class="m7b3m4blq"/></linearGradient></defs><path class="dyfj1ub6p wm-k"/><path fill="url(#SVGYBT2JcSv)" class="losxuxkvp wm-a"/><path class="wm-shine zqcexfauw"/><path class="jd8rkn48x wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-lunar:avatar-bunny"} {...others} />);
}

export default Component;
