import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/tklg79b7a.css';
import '../../css/d/dp65c3b5s.css';
import '../../css/o/ot6o4qb9o.css';
import '../../css/d/d6zxgccaz.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><g clip-path="url(#healthiconsNetwork4gNegative0)" class="cuyn6tgcc"><path clip-rule="evenodd" class="tklg79b7a"/><path class="dp65c3b5s"/><path clip-rule="evenodd" class="ot6o4qb9o"/></g><defs><clipPath id="healthiconsNetwork4gNegative0"><path class="d6zxgccaz"/></clipPath></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:network-4g-negative"} {...others} />);
}

export default Component;
