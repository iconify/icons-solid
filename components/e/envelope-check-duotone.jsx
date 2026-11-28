import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/j33-wabpg.css';
import '../../css/k/k4fvszbjt.css';

const viewBox = {"width":256,"height":256};
const content = `<g class="cuyn6tgcc"><path class="j33-wabpg"/><path class="k4fvszbjt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pullo:envelope-check-duotone"} {...others} />);
}

export default Component;
