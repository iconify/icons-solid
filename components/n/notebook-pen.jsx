import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/q4gtw2buk.css';
import '../../css/y/y41rve-fu.css';
import '../../css/s/sb3zdbrus.css';
import '../../css/b/bf1i_vi4m.css';
import '../../css/o/oj84kmnql.css';
import '../../css/e/eudt8k-bt.css';
import '../../css/h/h4vfxb8zm.css';
import '../../css/b/b83o01b0r.css';
import '../../css/w/wv4yr5bwp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="q4gtw2buk wm-k"/><path class="wm-s y41rve-fu"/><path class="sb3zdbrus wm-deco"/><path class="bf1i_vi4m wm-k"/><path class="oj84kmnql wm-s"/><path class="eudt8k-bt wm-shadow"/><path class="h4vfxb8zm wm-shine"/><path class="b83o01b0r wm-shine"/><path class="wm-shine wv4yr5bwp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-valentine:notebook-pen"} {...others} />);
}

export default Component;
