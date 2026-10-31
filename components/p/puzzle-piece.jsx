import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/oq39oejul.css';
import '../../css/z/zpu5g6b_y.css';
import '../../css/c/cpcc7dbqs.css';
import '../../css/c/c7cxvqale.css';
import '../../css/j/jr-ak6f4a.css';
import '../../css/j/ju9a0ebdx.css';
import '../../css/c/c1n4fpo2z.css';
import '../../css/o/oszgqibpj.css';
import '../../css/h/hmzcs4qjw.css';
import '../../css/p/pp6y71atd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="oq39oejul wm-shadow"/><path class="wm-k zpu5g6b_y"/><path class="cpcc7dbqs wm-k"/><path class="c7cxvqale wm-k"/><path class="jr-ak6f4a wm-k"/><path class="ju9a0ebdx wm-shine"/><path class="c1n4fpo2z wm-k"/><path class="oszgqibpj wm-k"/><path class="hmzcs4qjw wm-k"/><path class="pp6y71atd wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-coquette:puzzle-piece"} {...others} />);
}

export default Component;
