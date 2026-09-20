import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mv51s6-vx.css';
import '../../css/d/dnvesykes.css';
import '../../css/t/tsz79coki.css';
import '../../css/k/kfrk--cxh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="mv51s6-vx"/><path class="dnvesykes"/><path clip-rule="evenodd" class="tsz79coki"/><path clip-rule="evenodd" class="kfrk--cxh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:airbuds-left-bold"} {...others} />);
}

export default Component;
