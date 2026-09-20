import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/k/kgadckbnn.css';
import '../../css/u/ubohdlb2a.css';
import '../../css/m/mpc5ei_xk.css';
import '../../css/n/njv83cbiy.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="kgadckbnn"/><path class="ubohdlb2a"/><path class="mpc5ei_xk"/><path class="njv83cbiy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:video-meeting-monitor-webcam"} {...others} />);
}

export default Component;
