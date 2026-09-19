import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yey-7bbgd.css';
import '../../css/m/m3w28gbtg.css';
import '../../css/d/d6zxgccaz.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><g clip-path="url(#healthiconsPpeMaskNegative0)" class="cuyn6tgcc"><path class="yey-7bbgd"/><path clip-rule="evenodd" class="m3w28gbtg"/></g><defs><clipPath id="healthiconsPpeMaskNegative0"><path class="d6zxgccaz"/></clipPath></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:ppe-mask-negative"} {...others} />);
}

export default Component;
