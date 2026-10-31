import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fxnrcmbcl.css';
import '../../css/l/ll4ui7hzo.css';
import '../../css/c/caxhh42oz.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="fxnrcmbcl"/><path clip-rule="evenodd" class="ll4ui7hzo"/><path class="caxhh42oz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:drop-medicine"} {...others} />);
}

export default Component;
