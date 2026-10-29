import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/p/pvs0iqb8a.css';
import '../../css/j/j88sfgrhe.css';
import '../../css/e/e1h0nq76l.css';
import '../../css/j/jlp-ovbkm.css';
import '../../css/f/fdivfk9es.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="pvs0iqb8a wm-deco"/><path class="j88sfgrhe wm-deco"/><path class="e1h0nq76l wm-deco"/><path class="jlp-ovbkm wm-k"/><path class="fdivfk9es wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:brain-circuit-blueprint"} {...others} />);
}

export default Component;
