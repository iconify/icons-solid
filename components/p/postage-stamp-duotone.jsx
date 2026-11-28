import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rt53_j0-y.css';
import '../../css/m/m0zmy_bwu.css';

const viewBox = {"width":256,"height":256};
const content = `<g class="cuyn6tgcc"><path class="rt53_j0-y"/><path class="m0zmy_bwu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pullo:postage-stamp-duotone"} {...others} />);
}

export default Component;
