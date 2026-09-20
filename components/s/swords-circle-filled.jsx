import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hjzzbm_-c.css';
import '../../css/d/d2kvgvbvc.css';
import '../../css/k/kd5wpq13q.css';
import '../../css/k/k77qyolde.css';
import '../../css/e/e1goc0bta.css';
import '../../css/f/fpqnm3b0n.css';
import '../../css/c/ccbrufbxm.css';
import '../../css/k/kspoj7vnd.css';

const viewBox = {"width":26,"height":26};
const content = `<g class="cuyn6tgcc"><path class="hjzzbm_-c"/><g clip-rule="evenodd" class="d2kvgvbvc"><path class="kd5wpq13q"/><path class="k77qyolde"/><path class="e1goc0bta"/><path class="fpqnm3b0n"/><path class="ccbrufbxm"/></g><path clip-rule="evenodd" class="kspoj7vnd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-print:swords-circle-filled"} {...others} />);
}

export default Component;
