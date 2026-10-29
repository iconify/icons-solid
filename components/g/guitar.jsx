import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/z/z1lp20buu.css';
import '../../css/h/higpfcc7h.css';
import '../../css/r/r-pq7vbvm.css';
import '../../css/u/u4sydbb7s.css';
import '../../css/n/nd4c3sb3s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="wm-k z1lp20buu"/><path class="higpfcc7h wm-a"/><path class="r-pq7vbvm wm-k"/><path class="u4sydbb7s"/><path class="nd4c3sb3s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:guitar"} {...others} />);
}

export default Component;
