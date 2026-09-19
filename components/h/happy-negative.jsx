import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/sm_f0rb5o.css';
import '../../css/q/qa6uieb3t.css';
import '../../css/n/ngfx-vbzr.css';
import '../../css/d/d6zxgccaz.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><g clip-path="url(#healthiconsHappyNegative0)" class="cuyn6tgcc"><path class="sm_f0rb5o"/><path clip-rule="evenodd" class="qa6uieb3t"/><path clip-rule="evenodd" class="ngfx-vbzr"/></g><defs><clipPath id="healthiconsHappyNegative0"><path class="d6zxgccaz"/></clipPath></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:happy-negative"} {...others} />);
}

export default Component;
