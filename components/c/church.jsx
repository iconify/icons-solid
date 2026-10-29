import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/q/q7e--vbpk.css';
import '../../css/s/s38r-ac4v.css';
import '../../css/i/iiy298fsr.css';
import '../../css/n/no98bwjtv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="q7e--vbpk wm-k"/><path class="s38r-ac4v wm-k"/><path class="iiy298fsr"/><path class="no98bwjtv wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:church"} {...others} />);
}

export default Component;
