import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/we01h7bqs.css';
import '../../css/k/kumc9-wvn.css';
import '../../css/d/d6zxgccaz.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><g clip-path="url(#healthiconsCastNegative0)" class="cuyn6tgcc"><path class="we01h7bqs"/><path clip-rule="evenodd" class="kumc9-wvn"/></g><defs><clipPath id="healthiconsCastNegative0"><path class="d6zxgccaz"/></clipPath></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:cast-negative"} {...others} />);
}

export default Component;
