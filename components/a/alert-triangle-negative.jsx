import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/shb7m1c7p.css';
import '../../css/s/smq0d-xen.css';
import '../../css/d/d6zxgccaz.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><g clip-path="url(#healthiconsAlertTriangleNegative0)" class="cuyn6tgcc"><path class="shb7m1c7p"/><path clip-rule="evenodd" class="smq0d-xen"/></g><defs><clipPath id="healthiconsAlertTriangleNegative0"><path class="d6zxgccaz"/></clipPath></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:alert-triangle-negative"} {...others} />);
}

export default Component;
