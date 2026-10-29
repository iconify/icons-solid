import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/j/j6jfr6onh.css';
import '../../css/m/mol5oypic.css';
import '../../css/l/llfuwubbz.css';
import '../../css/l/lbrnwbcro.css';
import '../../css/q/qinpu5bxk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="j6jfr6onh wm-a"/><path class="mol5oypic"/><path class="llfuwubbz"/><path class="lbrnwbcro"/><path class="qinpu5bxk wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:cable"} {...others} />);
}

export default Component;
