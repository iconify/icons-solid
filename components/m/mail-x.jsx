import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/q41-ssbgd.css';
import '../../css/v/vlj567b_n.css';
import '../../css/a/a6we1gbui.css';
import '../../css/x/x1bbb8bua.css';
import '../../css/l/lb8tx8b3w.css';
import '../../css/r/ruk49-71x.css';
import '../../css/o/og6poqy-x.css';
import '../../css/w/wjcp9c3yw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="q41-ssbgd wm-k"/><path class="vlj567b_n wm-s"/><path class="a6we1gbui wm-k"/><path class="wm-s x1bbb8bua"/><path class="lb8tx8b3w wm-shadow"/><path class="ruk49-71x wm-shine"/><path class="og6poqy-x wm-shine"/><path class="wjcp9c3yw wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-valentine:mail-x"} {...others} />);
}

export default Component;
