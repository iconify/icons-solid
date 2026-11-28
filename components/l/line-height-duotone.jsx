import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/v9-eb3btl.css';
import '../../css/s/smfe7ybgl.css';

const viewBox = {"width":256,"height":256};
const content = `<g class="cuyn6tgcc"><path class="v9-eb3btl"/><path class="smfe7ybgl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pullo:line-height-duotone"} {...others} />);
}

export default Component;
