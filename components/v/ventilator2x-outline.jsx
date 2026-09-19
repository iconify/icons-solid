import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/l2es_7bef.css';
import '../../css/u/u74184bbs.css';
import '../../css/j/j2f-64b_n.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="l2es_7bef"/><path clip-rule="evenodd" class="u74184bbs"/><path class="j2f-64b_n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:ventilator2x-outline"} {...others} />);
}

export default Component;
