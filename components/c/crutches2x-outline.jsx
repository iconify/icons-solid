import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dw39a-bwv.css';
import '../../css/r/rxx21sbup.css';
import '../../css/w/wyubm_1dg.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="dw39a-bwv"/><path clip-rule="evenodd" class="rxx21sbup"/><path clip-rule="evenodd" class="wyubm_1dg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:crutches2x-outline"} {...others} />);
}

export default Component;
