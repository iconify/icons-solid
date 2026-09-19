import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/k-4g9cc_i.css';
import '../../css/x/x_a58ccsg.css';
import '../../css/d/d6zxgccaz.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><g clip-path="url(#healthiconsBlisterPillsOvalX4Negative0)" class="cuyn6tgcc"><path clip-rule="evenodd" class="k-4g9cc_i"/><path class="x_a58ccsg"/></g><defs><clipPath id="healthiconsBlisterPillsOvalX4Negative0"><path class="d6zxgccaz"/></clipPath></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:blister-pills-oval-x4-negative"} {...others} />);
}

export default Component;
