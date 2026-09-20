import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/vevmidywk.css';
import '../../css/a/asqgg9bdm.css';
import '../../css/j/j_rl4l5tj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="vevmidywk"/><path class="asqgg9bdm"/><path class="j_rl4l5tj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:cloud-alert-duotone"} {...others} />);
}

export default Component;
