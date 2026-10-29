import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/v/vsfomtbwl.css';
import '../../css/u/u83h24b3i.css';
import '../../css/w/wnp_e7j0w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="vsfomtbwl"/><path class="u83h24b3i wm-a"/><path class="wnp_e7j0w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:plane-takeoff-duo"} {...others} />);
}

export default Component;
