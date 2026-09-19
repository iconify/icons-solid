import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/tiywx1i6y.css';
import '../../css/y/ymdqyik9m.css';
import '../../css/d/d6zxgccaz.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><g clip-path="url(#healthiconsPills3Negative0)" class="cuyn6tgcc"><path class="tiywx1i6y"/><path clip-rule="evenodd" class="ymdqyik9m"/></g><defs><clipPath id="healthiconsPills3Negative0"><path class="d6zxgccaz"/></clipPath></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:pills-3-negative"} {...others} />);
}

export default Component;
