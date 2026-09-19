import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jsgk-sb-n.css';
import '../../css/x/xk-uvxblc.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="jsgk-sb-n"/><path clip-rule="evenodd" class="xk-uvxblc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:ventilator"} {...others} />);
}

export default Component;
