import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/l6x4ow53z.css';
import '../../css/l/lei_11jjg.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="l6x4ow53z"/><path class="lei_11jjg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:height"} {...others} />);
}

export default Component;
