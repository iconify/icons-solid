import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/oybjd3s2z.css';
import '../../css/t/turgpe-dg.css';
import '../../css/c/ccvr2ibtr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="oybjd3s2z"/><path class="turgpe-dg"/><path class="ccvr2ibtr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixelarticons:arrows-horizontal"} {...others} />);
}

export default Component;
