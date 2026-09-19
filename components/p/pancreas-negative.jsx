import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xnhozabus.css';
import '../../css/y/yhq5o5b3n.css';
import '../../css/d/d6zxgccaz.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><g clip-path="url(#healthiconsPancreasNegative0)" class="cuyn6tgcc"><path class="xnhozabus"/><path clip-rule="evenodd" class="yhq5o5b3n"/></g><defs><clipPath id="healthiconsPancreasNegative0"><path class="d6zxgccaz"/></clipPath></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:pancreas-negative"} {...others} />);
}

export default Component;
