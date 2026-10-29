import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/k/kmjv3yb0y.css';
import '../../css/u/u7ifs670z.css';
import '../../css/m/ma0y71btq.css';
import '../../css/u/us9qbxizz.css';
import '../../css/e/ewc-7sork.css';
import '../../css/e/e5h10r5es.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="kmjv3yb0y wm-deco"/><path class="u7ifs670z wm-deco"/><path class="ma0y71btq wm-deco"/><path class="us9qbxizz wm-k"/><path class="ewc-7sork wm-a"/><path class="e5h10r5es wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:cloud-hail-blueprint"} {...others} />);
}

export default Component;
