import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s9j_w3dor.css';
import '../../css/e/e7j7pdsuw.css';
import '../../css/t/todv8kb1o.css';
import '../../css/p/pjei-pbjt.css';
import '../../css/h/hxdn9gbth.css';
import '../../css/k/kl-gs9bzp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="s9j_w3dor wm-k"/><path class="e7j7pdsuw wm-k"/><path class="todv8kb1o wm-k"/><path class="pjei-pbjt wm-s"/><path class="hxdn9gbth wm-s"/><path class="kl-gs9bzp wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:wifi-off"} {...others} />);
}

export default Component;
