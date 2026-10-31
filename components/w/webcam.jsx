import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/j/jg90w6vjv.css';
import '../../css/q/qpf4a4i9g.css';
import '../../css/m/myo1y_bfp.css';
import '../../css/h/h8zyowbmm.css';
import '../../css/o/omr02s6jr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="jg90w6vjv wm-shadow"/><path class="qpf4a4i9g wm-shadow"/><path class="myo1y_bfp"/><path class="h8zyowbmm"/><path class="omr02s6jr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:webcam"} {...others} />);
}

export default Component;
