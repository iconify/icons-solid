import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/h/hyo6-jbdx.css';
import '../../css/t/thgy12bbk.css';
import '../../css/r/rshnm_bhy.css';
import '../../css/q/q3d-5jpqn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="hyo6-jbdx wm-k"/><path class="thgy12bbk wm-a"/><path class="rshnm_bhy"/><path class="q3d-5jpqn wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:lotus"} {...others} />);
}

export default Component;
