import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/s/s6hu1cmbz.css';
import '../../css/k/kydla-v8g.css';
import '../../css/c/caz3ylb4t.css';
import '../../css/e/e3ugiqbea.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="s6hu1cmbz wm-deco"/><path class="kydla-v8g wm-k"/><path class="caz3ylb4t wm-a"/><path class="e3ugiqbea wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:satellite-blueprint"} {...others} />);
}

export default Component;
