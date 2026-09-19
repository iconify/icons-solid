import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/d7_y3k80y.css';
import '../../css/m/m471xsbvh.css';
import '../../css/q/qg_-d1bma.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="d7_y3k80y"/><path clip-rule="evenodd" class="m471xsbvh"/><path class="qg_-d1bma"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:hot-meal2x-outline"} {...others} />);
}

export default Component;
