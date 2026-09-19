import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/inmr35bmm.css';
import '../../css/i/ij1h_i4xk.css';
import '../../css/d/d6zxgccaz.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><g clip-path="url(#healthiconsLactoseNegative0)" class="cuyn6tgcc"><path class="inmr35bmm"/><path clip-rule="evenodd" class="ij1h_i4xk"/></g><defs><clipPath id="healthiconsLactoseNegative0"><path class="d6zxgccaz"/></clipPath></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:lactose-negative"} {...others} />);
}

export default Component;
