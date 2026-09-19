import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/u99lp1b_s.css';
import '../../css/l/lbb-5lblm.css';
import '../../css/i/iuxtdgbnr.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="u99lp1b_s"/><path class="lbb-5lblm"/><path clip-rule="evenodd" class="iuxtdgbnr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:measles-outline"} {...others} />);
}

export default Component;
