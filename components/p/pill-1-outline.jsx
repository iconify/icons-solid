import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cyzx-o7pi.css';
import '../../css/w/wi8hi9iwd.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="cyzx-o7pi"/><path clip-rule="evenodd" class="wi8hi9iwd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:pill-1-outline"} {...others} />);
}

export default Component;
