import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/q_qkzmbug.css';
import '../../css/g/gpdtabc8f.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="q_qkzmbug"/><path class="gpdtabc8f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:chart-cured-increasing"} {...others} />);
}

export default Component;
