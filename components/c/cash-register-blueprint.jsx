import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/j/jtg1xwblt.css';
import '../../css/k/kem-d_31q.css';
import '../../css/o/o7-ag87sb.css';
import '../../css/a/azgtk1fkp.css';
import '../../css/q/quw2ubcxm.css';
import '../../css/r/ry8ytjbib.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="jtg1xwblt wm-deco"/><path class="kem-d_31q wm-deco"/><path class="o7-ag87sb wm-deco"/><path class="azgtk1fkp wm-k"/><path class="quw2ubcxm wm-a"/><path class="ry8ytjbib wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:cash-register-blueprint"} {...others} />);
}

export default Component;
