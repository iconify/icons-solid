import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jx_isobmu.css';
import '../../css/r/rsakbsbbr.css';
import '../../css/l/lr8sivbky.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="jx_isobmu"/><path class="rsakbsbbr"/><path class="lr8sivbky"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:earth-bold"} {...others} />);
}

export default Component;
