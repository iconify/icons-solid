import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pxu_y3blz.css';
import '../../css/q/qkn6ysiyx.css';
import '../../css/h/ha5gndbef.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="pxu_y3blz"/><path class="qkn6ysiyx"/><path clip-rule="evenodd" class="ha5gndbef"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:young-people-outline"} {...others} />);
}

export default Component;
