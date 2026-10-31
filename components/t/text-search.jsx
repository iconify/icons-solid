import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/q/q4rhsv0ue.css';
import '../../css/u/ua746xj0h.css';
import '../../css/p/p3292x1pz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="q4rhsv0ue wm-shadow"/><path class="ua746xj0h"/><path class="p3292x1pz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:text-search"} {...others} />);
}

export default Component;
