import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/i/i_aqwmb_s.css';
import '../../css/k/kcbcznytb.css';
import '../../css/v/vt5jmmcqg.css';
import '../../css/h/h7bpecczy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="i_aqwmb_s wm-k"/><path class="kcbcznytb"/><path class="vt5jmmcqg"/><path class="h7bpecczy wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:unplug"} {...others} />);
}

export default Component;
