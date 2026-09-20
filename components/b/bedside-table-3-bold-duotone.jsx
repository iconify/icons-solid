import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dzv5cqagr.css';
import '../../css/r/r1pshfsrk.css';
import '../../css/m/m2oftwu5b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="dzv5cqagr"/><path class="r1pshfsrk"/><path class="m2oftwu5b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:bedside-table-3-bold-duotone"} {...others} />);
}

export default Component;
