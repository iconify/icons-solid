import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/oqtbvlb1g.css';
import '../../css/r/rbof6kbxx.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="oqtbvlb1g"/><path clip-rule="evenodd" class="rbof6kbxx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:blood-pressure-monitor2x-outline"} {...others} />);
}

export default Component;
