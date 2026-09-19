import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wfb-nmuvg.css';
import '../../css/z/zwu2hyb8k.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="wfb-nmuvg"/><path clip-rule="evenodd" class="zwu2hyb8k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:discharge-lounge-outline"} {...others} />);
}

export default Component;
