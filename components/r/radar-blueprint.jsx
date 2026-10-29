import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/a/a1k5gcctw.css';
import '../../css/o/o7-ag87sb.css';
import '../../css/p/p6qte910m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="a1k5gcctw wm-deco"/><path class="o7-ag87sb wm-deco"/><path class="p6qte910m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:radar-blueprint"} {...others} />);
}

export default Component;
