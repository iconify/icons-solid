import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/r/ro04ee4yx.css';
import '../../css/c/ccbhrnluh.css';
import '../../css/c/cwjq-2bqx.css';
import '../../css/j/j6jfr6onh.css';
import '../../css/m/mol5oypic.css';
import '../../css/l/llfuwubbz.css';
import '../../css/l/lbrnwbcro.css';
import '../../css/q/qinpu5bxk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="ro04ee4yx wm-k"/><path class="ccbhrnluh wm-a"/><path class="cwjq-2bqx wm-shadow"/><path class="j6jfr6onh wm-a"/><path class="mol5oypic wm-k"/><path class="llfuwubbz wm-k"/><path class="lbrnwbcro wm-k"/><path class="qinpu5bxk wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:cable-engrave"} {...others} />);
}

export default Component;
