import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/k41846-ov.css';
import '../../css/y/y6u_32b-i.css';
import '../../css/d/d6zxgccaz.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><g clip-path="url(#healthiconsJusticeNegative0)" class="cuyn6tgcc"><path class="k41846-ov"/><path clip-rule="evenodd" class="y6u_32b-i"/></g><defs><clipPath id="healthiconsJusticeNegative0"><path class="d6zxgccaz"/></clipPath></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:justice-negative"} {...others} />);
}

export default Component;
