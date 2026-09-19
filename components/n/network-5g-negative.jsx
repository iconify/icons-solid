import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/whble8bgt.css';
import '../../css/c/cil-zdl9x.css';
import '../../css/d/d6zxgccaz.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><g clip-path="url(#healthiconsNetwork5gNegative0)" class="cuyn6tgcc"><path class="whble8bgt"/><path clip-rule="evenodd" class="cil-zdl9x"/></g><defs><clipPath id="healthiconsNetwork5gNegative0"><path class="d6zxgccaz"/></clipPath></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:network-5g-negative"} {...others} />);
}

export default Component;
