import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hjzzbm_-c.css';
import '../../css/d/d2kvgvbvc.css';
import '../../css/d/dy-awy0ir.css';
import '../../css/g/g_s77ruob.css';
import '../../css/w/w2ifseclb.css';
import '../../css/y/yg9621rfx.css';
import '../../css/e/e44mx_b3e.css';
import '../../css/k/kspoj7vnd.css';

const viewBox = {"width":26,"height":26};
const content = `<g class="cuyn6tgcc"><path class="hjzzbm_-c"/><g clip-rule="evenodd" class="d2kvgvbvc"><path class="dy-awy0ir"/><path class="g_s77ruob"/><path class="w2ifseclb"/><path class="yg9621rfx"/><path class="e44mx_b3e"/></g><path clip-rule="evenodd" class="kspoj7vnd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-print:move-x-circle-filled"} {...others} />);
}

export default Component;
