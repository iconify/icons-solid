import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/i/irha4wb9h.css';
import '../../css/u/uch2m0oxc.css';
import '../../css/m/mslj97efm.css';
import '../../css/q/q7fzkwb4t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="irha4wb9h wm-k"/><path class="uch2m0oxc wm-a"/><path class="mslj97efm wm-k"/><path class="q7fzkwb4t wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:arrow-left-sketch"} {...others} />);
}

export default Component;
