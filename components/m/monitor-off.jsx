import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/k/k23j7_x9t.css';
import '../../css/j/js3as93ye.css';
import '../../css/q/q6xs2hb9n.css';
import '../../css/u/ureitbb2w.css';
import '../../css/o/ohtj0i3jo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="k23j7_x9t wm-k"/><path class="js3as93ye wm-k"/><path class="q6xs2hb9n"/><path class="ureitbb2w"/><path class="ohtj0i3jo wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:monitor-off"} {...others} />);
}

export default Component;
