import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/w/we43_nbni.css';
import '../../css/x/xkp3dyb6z.css';
import '../../css/j/jlzcicccw.css';
import '../../css/p/p8mjeye8l.css';
import '../../css/e/ew3nn2-cq.css';
import '../../css/e/e_qx7gixm.css';
import '../../css/t/te8dqmbho.css';
import '../../css/r/rni5rebsd.css';
import '../../css/v/vn9n4obyk.css';
import '../../css/m/mamj31z5h.css';
import '../../css/r/rl1rttwal.css';
import '../../css/i/izcwmac9d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="we43_nbni wm-shadow"/><path class="xkp3dyb6z"/><path class="jlzcicccw"/><path class="p8mjeye8l"/><path class="ew3nn2-cq"/><path class="e_qx7gixm"/><path class="te8dqmbho"/><path class="rni5rebsd"/><path class="vn9n4obyk wm-s"/><path class="mamj31z5h wm-s"/><path class="rl1rttwal wm-s"/><path class="izcwmac9d wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:monitor-off"} {...others} />);
}

export default Component;
