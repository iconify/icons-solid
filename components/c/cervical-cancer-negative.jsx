import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mkbg1r4zp.css';
import '../../css/h/h9jmrg04z.css';
import '../../css/p/pq1nmouyg.css';
import '../../css/d/d6zxgccaz.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><g clip-path="url(#healthiconsCervicalCancerNegative0)" class="cuyn6tgcc"><path clip-rule="evenodd" class="mkbg1r4zp"/><path class="h9jmrg04z"/><path clip-rule="evenodd" class="pq1nmouyg"/></g><defs><clipPath id="healthiconsCervicalCancerNegative0"><path class="d6zxgccaz"/></clipPath></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:cervical-cancer-negative"} {...others} />);
}

export default Component;
