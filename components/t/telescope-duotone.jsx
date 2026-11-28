import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rznvhtmtm.css';
import '../../css/w/wjdq--c_j.css';

const viewBox = {"width":256,"height":256};
const content = `<g class="cuyn6tgcc"><path class="rznvhtmtm"/><path class="wjdq--c_j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pullo:telescope-duotone"} {...others} />);
}

export default Component;
