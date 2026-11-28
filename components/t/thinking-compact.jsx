import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cwtx3g--b.css';
import '../../css/x/xzq_ns0ra.css';

const viewBox = {"width":12,"height":12};
const content = `<g class="cuyn6tgcc"><path class="cwtx3g--b"/><path clip-rule="evenodd" class="xzq_ns0ra"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"codicon:thinking-compact"} {...others} />);
}

export default Component;
