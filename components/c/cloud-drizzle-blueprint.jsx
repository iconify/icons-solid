import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/f/fugk7dg-w.css';
import '../../css/i/ies3f1bwm.css';
import '../../css/p/puh_7bb0r.css';
import '../../css/u/us9qbxizz.css';
import '../../css/m/m_8l524zc.css';
import '../../css/e/e5h10r5es.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="fugk7dg-w wm-deco"/><path class="ies3f1bwm wm-deco"/><path class="puh_7bb0r wm-deco"/><path class="us9qbxizz wm-k"/><path class="m_8l524zc wm-a"/><path class="e5h10r5es wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:cloud-drizzle-blueprint"} {...others} />);
}

export default Component;
