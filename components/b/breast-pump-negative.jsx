import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/u_wpzfweg.css';
import '../../css/b/b-7hyhlyn.css';
import '../../css/u/uym-bnbal.css';
import '../../css/d/d6zxgccaz.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><g clip-path="url(#healthiconsBreastPumpNegative0)" class="cuyn6tgcc"><path class="u_wpzfweg"/><path clip-rule="evenodd" class="b-7hyhlyn"/><path clip-rule="evenodd" class="uym-bnbal"/></g><defs><clipPath id="healthiconsBreastPumpNegative0"><path class="d6zxgccaz"/></clipPath></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:breast-pump-negative"} {...others} />);
}

export default Component;
