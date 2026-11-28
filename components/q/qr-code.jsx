import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/q/q4yhjob_q.css';
import '../../css/s/su_j4xs_x.css';
import '../../css/j/js8xzdbuz.css';
import '../../css/e/e_rlgbb6x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="q4yhjob_q"/><path class="su_j4xs_x"/><path class="js8xzdbuz"/><path class="e_rlgbb6x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:qr-code"} {...others} />);
}

export default Component;
