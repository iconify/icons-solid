import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/i3rzbdcyp.css';
import '../../css/g/gyxskib_m.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="i3rzbdcyp"/><path clip-rule="evenodd" class="gyxskib_m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:family-planning-outline"} {...others} />);
}

export default Component;
