import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/w_ke1bbey.css';
import '../../css/l/lyv_st-0c.css';
import '../../css/j/j53y1ybih.css';
import '../../css/u/ubczyjues.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="w_ke1bbey"/><path clip-rule="evenodd" class="lyv_st-0c"/><path class="j53y1ybih"/><path clip-rule="evenodd" class="ubczyjues"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:security-worker2x-outline"} {...others} />);
}

export default Component;
