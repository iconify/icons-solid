import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s8-slwg_h.css';
import '../../css/g/gq1brfdai.css';
import '../../css/l/llfja7b3v.css';
import '../../css/r/rh7_uoc-a.css';
import '../../css/t/tb1pqonkp.css';
import '../../css/t/tk7lh5kip.css';
import '../../css/q/qk51vhc3u.css';
import '../../css/c/c30w2cbdq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="s8-slwg_h wm-k"/><path class="gq1brfdai wm-k"/><path class="llfja7b3v wm-k"/><path class="rh7_uoc-a wm-shine"/><path class="tb1pqonkp wm-k"/><path class="tk7lh5kip wm-k"/><path class="qk51vhc3u wm-k"/><path class="c30w2cbdq wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:hexagon"} {...others} />);
}

export default Component;
