import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/i/iq9pomw_e.css';
import '../../css/p/p1srrrb8n.css';
import '../../css/h/hmxstlbuw.css';
import '../../css/x/x_fhtgbsc.css';
import '../../css/v/vc_k4npeo.css';
import '../../css/j/jya275-0f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="iq9pomw_e wm-shadow"/><path class="p1srrrb8n"/><path class="hmxstlbuw"/><path class="x_fhtgbsc"/><path class="vc_k4npeo"/><path class="jya275-0f wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:dhak"} {...others} />);
}

export default Component;
