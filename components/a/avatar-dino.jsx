import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wb6u4fq3s.css';
import '../../css/p/pcbqqcccz.css';
import '../../css/j/j30e04byl.css';
import '../../css/i/in_r12b7s.css';
import '../../css/i/i2mt3zb8c.css';
import '../../css/q/qf9eclnnw.css';
import '../../css/p/p7u56bcoz.css';
import '../../css/c/c-gq536-j.css';
import '../../css/w/wf2mnpbzc.css';
import '../../css/r/r81xn5i6e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="wb6u4fq3s wm-shadow"/><path class="pcbqqcccz wm-shadow"/><path class="j30e04byl"/><path class="in_r12b7s"/><path class="i2mt3zb8c"/><path class="qf9eclnnw"/><path class="p7u56bcoz wm-shine"/><path class="c-gq536-j wm-shine"/><path class="wf2mnpbzc"/><path class="r81xn5i6e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-skeuo:avatar-dino"} {...others} />);
}

export default Component;
