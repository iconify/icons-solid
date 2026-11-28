import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/ddbrvzzet.css';
import '../../css/g/g8qufbcjc.css';

const viewBox = {"width":256,"height":256};
const content = `<g class="cuyn6tgcc"><path class="ddbrvzzet"/><path class="g8qufbcjc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pullo:border-left-duotone"} {...others} />);
}

export default Component;
