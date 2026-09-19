import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/tx4ucrbrc.css';
import '../../css/p/plg4ghbsm.css';
import '../../css/a/ai58kdhbv.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="tx4ucrbrc"/><path clip-rule="evenodd" class="plg4ghbsm"/><path clip-rule="evenodd" class="ai58kdhbv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:stent2x-outline"} {...others} />);
}

export default Component;
