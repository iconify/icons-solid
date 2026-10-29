import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/l/l4l_w_elj.css';
import '../../css/p/p1q1kjuyq.css';
import '../../css/w/wqi1ttb4q.css';
import '../../css/l/l78r-9b3n.css';
import '../../css/x/x3-tdcc5k.css';
import '../../css/q/q5in__i_l.css';
import '../../css/l/lqs6-3j2e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="l4l_w_elj wm-shadow"/><path class="p1q1kjuyq"/><path class="wqi1ttb4q"/><path class="l78r-9b3n"/><path class="wm-shine x3-tdcc5k"/><path class="q5in__i_l wm-deco"/><path class="lqs6-3j2e wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:underline"} {...others} />);
}

export default Component;
