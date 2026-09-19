import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/n0nx98bhb.css';
import '../../css/i/iihz_kbpm.css';
import '../../css/d/d6zxgccaz.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><g clip-path="url(#healthiconsEmergencyPostNegative0)" class="cuyn6tgcc"><path class="n0nx98bhb"/><path clip-rule="evenodd" class="iihz_kbpm"/></g><defs><clipPath id="healthiconsEmergencyPostNegative0"><path class="d6zxgccaz"/></clipPath></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:emergency-post-negative"} {...others} />);
}

export default Component;
