import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pffpvtbmb.css';
import '../../css/k/k8797ob6w.css';

const viewBox = {"width":256,"height":256};
const content = `<g class="cuyn6tgcc"><path class="pffpvtbmb"/><path class="k8797ob6w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pullo:satellite-duotone"} {...others} />);
}

export default Component;
