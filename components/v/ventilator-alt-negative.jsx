import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/c2-cn9vmi.css';
import '../../css/t/tns0z8b5l.css';
import '../../css/d/d6zxgccaz.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><g clip-path="url(#healthiconsVentilatorAltNegative0)" class="cuyn6tgcc"><path class="c2-cn9vmi"/><path clip-rule="evenodd" class="tns0z8b5l"/></g><defs><clipPath id="healthiconsVentilatorAltNegative0"><path class="d6zxgccaz"/></clipPath></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:ventilator-alt-negative"} {...others} />);
}

export default Component;
