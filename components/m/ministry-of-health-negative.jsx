import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rlhx9rbvz.css';
import '../../css/n/n567av3lf.css';
import '../../css/d/d6zxgccaz.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><g clip-path="url(#healthiconsMinistryOfHealthNegative0)" class="cuyn6tgcc"><path class="rlhx9rbvz"/><path clip-rule="evenodd" class="n567av3lf"/></g><defs><clipPath id="healthiconsMinistryOfHealthNegative0"><path class="d6zxgccaz"/></clipPath></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:ministry-of-health-negative"} {...others} />);
}

export default Component;
