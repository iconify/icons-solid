import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/u0svx51-g.css';
import '../../css/n/nxw_4zb_r.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="u0svx51-g"/><path clip-rule="evenodd" class="nxw_4zb_r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:war"} {...others} />);
}

export default Component;
