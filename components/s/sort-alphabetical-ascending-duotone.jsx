import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/axcq7ubvg.css';
import '../../css/i/in29btpof.css';

const viewBox = {"width":256,"height":256};
const content = `<g class="cuyn6tgcc"><path class="axcq7ubvg"/><path class="in29btpof"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pullo:sort-alphabetical-ascending-duotone"} {...others} />);
}

export default Component;
