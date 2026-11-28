import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/uezpvdbah.css';
import '../../css/c/cn60ysbnp.css';

const viewBox = {"width":256,"height":256};
const content = `<g class="cuyn6tgcc"><path class="uezpvdbah"/><path class="cn60ysbnp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pullo:ungroup-duotone"} {...others} />);
}

export default Component;
