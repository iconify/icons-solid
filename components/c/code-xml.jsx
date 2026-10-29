import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/f/f_d03t8ud.css';
import '../../css/r/r39s_1v-s.css';
import '../../css/d/dtoar_7ma.css';
import '../../css/d/dctbr5ngc.css';
import '../../css/c/ctsqbjb_j.css';
import '../../css/j/jn01vtjva.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="f_d03t8ud wm-shadow"/><path class="r39s_1v-s"/><path class="dtoar_7ma"/><path class="dctbr5ngc"/><path class="ctsqbjb_j wm-shine"/><path class="jn01vtjva wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:code-xml"} {...others} />);
}

export default Component;
