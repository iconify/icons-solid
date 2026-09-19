import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/thbf1-bfm.css';
import '../../css/i/ihgsnmbfr.css';
import '../../css/d/d6zxgccaz.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><g clip-path="url(#healthiconsPpeFaceShieldAltNegative0)" class="cuyn6tgcc"><path class="thbf1-bfm"/><path clip-rule="evenodd" class="ihgsnmbfr"/></g><defs><clipPath id="healthiconsPpeFaceShieldAltNegative0"><path class="d6zxgccaz"/></clipPath></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:ppe-face-shield-alt-negative"} {...others} />);
}

export default Component;
