import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/a/aseq9f6mj.css';
import '../../css/i/ibcxmev1f.css';
import '../../css/g/g_x_43b_u.css';
import '../../css/d/d-i-6xtrt.css';
import '../../css/j/j6jfr6onh.css';
import '../../css/m/mol5oypic.css';
import '../../css/l/llfuwubbz.css';
import '../../css/l/lbrnwbcro.css';
import '../../css/q/qinpu5bxk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="aseq9f6mj"/><path class="ibcxmev1f wm-a"/><path class="g_x_43b_u"/><path class="d-i-6xtrt wm-a"/><path class="j6jfr6onh wm-a"/><path class="mol5oypic"/><path class="llfuwubbz"/><path class="lbrnwbcro"/><path class="qinpu5bxk wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:cable-duo"} {...others} />);
}

export default Component;
