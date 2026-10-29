import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/n/n7elt5bfh.css';
import '../../css/f/f3go72jwi.css';
import '../../css/z/zbifmublz.css';
import '../../css/v/vx6zdbmhm.css';
import '../../css/t/tfoga5och.css';
import '../../css/v/vn9n4obyk.css';
import '../../css/m/mamj31z5h.css';
import '../../css/r/rl1rttwal.css';
import '../../css/s/sloj1fjmk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="n7elt5bfh wm-shadow"/><path class="f3go72jwi"/><path class="zbifmublz"/><path class="vx6zdbmhm"/><path class="tfoga5och wm-shine"/><path class="vn9n4obyk wm-s"/><path class="mamj31z5h wm-s"/><path class="rl1rttwal wm-s"/><path class="sloj1fjmk wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:server-off"} {...others} />);
}

export default Component;
