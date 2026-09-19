import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cwa33jfpr.css';
import '../../css/q/qivh9og_j.css';
import '../../css/e/e-94ze_xl.css';
import '../../css/e/e-m13ip8t.css';
import '../../css/d/d6zxgccaz.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><g clip-path="url(#healthiconsHpvNegative0)" class="cuyn6tgcc"><path class="cwa33jfpr"/><path clip-rule="evenodd" class="qivh9og_j"/><path class="e-94ze_xl"/><path clip-rule="evenodd" class="e-m13ip8t"/></g><defs><clipPath id="healthiconsHpvNegative0"><path class="d6zxgccaz"/></clipPath></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:hpv-negative"} {...others} />);
}

export default Component;
