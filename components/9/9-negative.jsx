import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qdf62dcxv.css';
import '../../css/w/whbsvqbtd.css';
import '../../css/d/d6zxgccaz.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><g clip-path="url(#healthicons9Negative0)" class="cuyn6tgcc"><path class="qdf62dcxv"/><path clip-rule="evenodd" class="whbsvqbtd"/></g><defs><clipPath id="healthicons9Negative0"><path class="d6zxgccaz"/></clipPath></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:9-negative"} {...others} />);
}

export default Component;
