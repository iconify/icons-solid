import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/n2573vb8k.css';
import '../../css/d/dxjkcj2hc.css';
import '../../css/p/pxi3puayf.css';
import '../../css/m/mpg06dbtz.css';
import '../../css/d/d6zxgccaz.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><g clip-path="url(#healthiconsAccidentAndEmergencyNegative0)" class="cuyn6tgcc"><path clip-rule="evenodd" class="n2573vb8k"/><path clip-rule="evenodd" class="dxjkcj2hc"/><path clip-rule="evenodd" class="pxi3puayf"/><path class="mpg06dbtz"/></g><defs><clipPath id="healthiconsAccidentAndEmergencyNegative0"><path class="d6zxgccaz"/></clipPath></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:accident-and-emergency-negative"} {...others} />);
}

export default Component;
