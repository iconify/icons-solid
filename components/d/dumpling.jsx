import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/u/u_23_8w1c.css';
import '../../css/a/aa5yqgb_m.css';
import '../../css/y/yeh2unb9t.css';
import '../../css/t/tiyt6lexl.css';
import '../../css/n/nbqamhbcy.css';
import '../../css/a/akvr8ibym.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="u_23_8w1c wm-shadow"/><path class="aa5yqgb_m"/><path class="yeh2unb9t"/><path class="tiyt6lexl"/><path class="nbqamhbcy wm-shine"/><path class="akvr8ibym wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:dumpling"} {...others} />);
}

export default Component;
