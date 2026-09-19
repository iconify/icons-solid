import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/a545g_bck.css';
import '../../css/e/e5ubdwl-r.css';
import '../../css/j/js13rifac.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="a545g_bck"/><path class="e5ubdwl-r"/><path clip-rule="evenodd" class="js13rifac"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:domestic-worker-alt2x-outline"} {...others} />);
}

export default Component;
