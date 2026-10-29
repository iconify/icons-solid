import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/t/teb2ysj1l.css';
import '../../css/h/hrwzmwc9i.css';
import '../../css/p/puh_7bb0r.css';
import '../../css/u/us9qbxizz.css';
import '../../css/z/z5pfo_ber.css';
import '../../css/e/e5h10r5es.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="teb2ysj1l wm-deco"/><path class="hrwzmwc9i wm-deco"/><path class="puh_7bb0r wm-deco"/><path class="us9qbxizz wm-k"/><path class="wm-a z5pfo_ber"/><path class="e5h10r5es wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:cloud-snow-blueprint"} {...others} />);
}

export default Component;
