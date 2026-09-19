import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wb5ffvplm.css';
import '../../css/u/u99lp1b_s.css';
import '../../css/s/siob3cbvz.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="wb5ffvplm"/><path clip-rule="evenodd" class="u99lp1b_s"/><path clip-rule="evenodd" class="siob3cbvz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:sad-outline"} {...others} />);
}

export default Component;
