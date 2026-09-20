import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qjhhubcgu.css';
import '../../css/d/dd-30bcmc.css';
import '../../css/q/qthr2jvjl.css';
import '../../css/y/ygg0mk33w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="qjhhubcgu"/><path class="dd-30bcmc"/><path class="qthr2jvjl"/><path clip-rule="evenodd" class="ygg0mk33w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:masks-outline"} {...others} />);
}

export default Component;
