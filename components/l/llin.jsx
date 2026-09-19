import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/c0k_5xxgk.css';
import '../../css/b/bc-0_z50q.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="c0k_5xxgk"/><path class="bc-0_z50q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:llin"} {...others} />);
}

export default Component;
