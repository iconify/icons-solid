import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hitl4wbnd.css';
import '../../css/d/dev-u4xgs.css';
import '../../css/l/lr1kypg_e.css';
import '../../css/c/ceu3ph51v.css';
import '../../css/x/xg62z3bdp.css';
import '../../css/j/je-h-gbvs.css';
import '../../css/q/qqin4vbhy.css';
import '../../css/e/eu5w6kz1t.css';
import '../../css/c/c7nu0q1tq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="hitl4wbnd wm-shadow"/><path class="dev-u4xgs wm-shadow"/><path class="lr1kypg_e"/><path class="ceu3ph51v"/><path class="xg62z3bdp"/><path class="je-h-gbvs"/><path class="qqin4vbhy wm-shine"/><path class="eu5w6kz1t wm-shine"/><path class="c7nu0q1tq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-skeuo:rewind"} {...others} />);
}

export default Component;
