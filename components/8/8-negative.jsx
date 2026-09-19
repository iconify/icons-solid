import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/h6ixtxbck.css';
import '../../css/j/jqr3nvo3o.css';
import '../../css/d/d6zxgccaz.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><g clip-path="url(#healthicons8Negative0)" class="cuyn6tgcc"><path class="h6ixtxbck"/><path clip-rule="evenodd" class="jqr3nvo3o"/></g><defs><clipPath id="healthicons8Negative0"><path class="d6zxgccaz"/></clipPath></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:8-negative"} {...others} />);
}

export default Component;
