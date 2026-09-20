import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/oui6jibir.css';
import '../../css/e/e0g_9u1nt.css';
import '../../css/t/t3w3xjbdh.css';
import '../../css/h/hj1f3_bgn.css';
import '../../css/n/n6gt8cc-b.css';
import '../../css/k/kdrugxblg.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="oui6jibir"/><path class="e0g_9u1nt"/><path class="t3w3xjbdh"/><path class="hj1f3_bgn"/><path class="n6gt8cc-b"/><path class="kdrugxblg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:hand-held-tablet-writing"} {...others} />);
}

export default Component;
