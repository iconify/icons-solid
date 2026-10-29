import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v4hrpgyjw.css';
import '../../css/o/ok40bh-wc.css';
import '../../css/y/yh-xevbcz.css';
import '../../css/l/lkv7a5b3a.css';
import '../../css/x/xm56xuv7u.css';
import '../../css/k/kuu7kwm7j.css';
import '../../css/f/fu_xkybzn.css';
import '../../css/r/rm54-jbbz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="v4hrpgyjw wm-k"/><path class="ok40bh-wc wm-k"/><path class="wm-k yh-xevbcz"/><path class="lkv7a5b3a wm-shine"/><path class="wm-a xm56xuv7u"/><path class="kuu7kwm7j wm-a"/><path class="fu_xkybzn wm-a"/><path class="rm54-jbbz wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:cloud-lightning"} {...others} />);
}

export default Component;
