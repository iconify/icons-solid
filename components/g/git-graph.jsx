import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/d/dlbdyuest.css';
import '../../css/e/ej5oers_e.css';
import '../../css/w/wimjzab2b.css';
import '../../css/u/ukq3os1_u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="dlbdyuest wm-k"/><path class="ej5oers_e wm-a"/><path class="wimjzab2b"/><path class="ukq3os1_u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:git-graph"} {...others} />);
}

export default Component;
