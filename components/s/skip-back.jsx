import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rvet3acbr.css';
import '../../css/m/mq-f45x_u.css';
import '../../css/q/q89l-q1ii.css';
import '../../css/h/hvqgc5-1h.css';
import '../../css/f/fitjgkbpv.css';
import '../../css/g/gd3rybb7e.css';
import '../../css/p/pexsjobte.css';
import '../../css/l/lcaqt_bpb.css';
import '../../css/o/oxrw48b4d.css';
import '../../css/m/mxgl0zjbg.css';
import '../../css/u/utq9kd66c.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rvet3acbr wm-shadow"/><path class="mq-f45x_u wm-k"/><path class="q89l-q1ii wm-k"/><path class="hvqgc5-1h wm-k"/><path class="fitjgkbpv wm-k"/><path class="gd3rybb7e wm-k"/><path class="pexsjobte wm-shine"/><path class="lcaqt_bpb wm-a"/><path class="oxrw48b4d wm-a"/><path class="mxgl0zjbg wm-a"/><path class="utq9kd66c wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:skip-back"} {...others} />);
}

export default Component;
