import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/osl2pacnv.css';
import '../../css/p/pgeiwdbwc.css';
import '../../css/w/wnbm9ubwr.css';
import '../../css/z/z8y5cubeq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="osl2pacnv"/><path class="pgeiwdbwc"/><path class="wnbm9ubwr"/><path class="z8y5cubeq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:suitcase-lines-bold-duotone"} {...others} />);
}

export default Component;
