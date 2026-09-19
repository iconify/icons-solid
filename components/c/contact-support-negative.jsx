import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/tn64s4b7m.css';
import '../../css/q/qwabj6bdb.css';
import '../../css/d/d6zxgccaz.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><g clip-path="url(#healthiconsContactSupportNegative0)" class="cuyn6tgcc"><path class="tn64s4b7m"/><path clip-rule="evenodd" class="qwabj6bdb"/></g><defs><clipPath id="healthiconsContactSupportNegative0"><path class="d6zxgccaz"/></clipPath></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:contact-support-negative"} {...others} />);
}

export default Component;
