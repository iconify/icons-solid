import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wg7kdbjry.css';
import '../../css/j/j2j5mjb7q.css';
import '../../css/j/jd9uzrh1f.css';
import '../../css/r/r6z838bgb.css';
import '../../css/x/x013i-lnu.css';
import '../../css/m/mur5-dtwq.css';
import '../../css/q/qgic4eb0b.css';
import '../../css/w/w_qp3fkyo.css';
import '../../css/i/iaew136ts.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="wg7kdbjry wm-k"/><path class="j2j5mjb7q wm-k"/><path class="jd9uzrh1f wm-k"/><path class="r6z838bgb wm-shine"/><path class="wm-k x013i-lnu"/><path class="mur5-dtwq wm-k"/><path class="qgic4eb0b wm-k"/><path class="w_qp3fkyo wm-k"/><path class="iaew136ts wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:bandage"} {...others} />);
}

export default Component;
