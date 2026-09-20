import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/w0oxyi59p.css';
import '../../css/i/i537oybnl.css';
import '../../css/t/tthxbwbtx.css';
import '../../css/b/bimj6bcxy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="w0oxyi59p"/><path class="i537oybnl"/><path class="tthxbwbtx"/><path clip-rule="evenodd" class="bimj6bcxy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:wi-fi-router-bold"} {...others} />);
}

export default Component;
