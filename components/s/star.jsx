import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/u/up-h3lbja.css';
import '../../css/u/upro8abul.css';
import '../../css/s/sve3_ykkb.css';
import '../../css/j/jebh6tb6g.css';
import '../../css/t/tl5g9_b1k.css';
import '../../css/a/aj1r45djd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="up-h3lbja wm-shadow"/><path class="upro8abul"/><path class="sve3_ykkb"/><path class="jebh6tb6g"/><path class="tl5g9_b1k wm-shine"/><path class="aj1r45djd wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:star"} {...others} />);
}

export default Component;
