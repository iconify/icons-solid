import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cj6yv2-uu.css';
import '../../css/x/xc1-cf9it.css';
import '../../css/d/d6zxgccaz.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><g clip-path="url(#healthiconsONegative0)" class="cuyn6tgcc"><path class="cj6yv2-uu"/><path clip-rule="evenodd" class="xc1-cf9it"/></g><defs><clipPath id="healthiconsONegative0"><path class="d6zxgccaz"/></clipPath></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:o-negative"} {...others} />);
}

export default Component;
