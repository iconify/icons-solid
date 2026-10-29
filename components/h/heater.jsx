import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/j/jo3c-ysgb.css';
import '../../css/i/iaot_bb1t.css';
import '../../css/l/lwb3dou7m.css';
import '../../css/s/s6k3lxbkx.css';
import '../../css/u/uii1ffbpj.css';
import '../../css/n/nkois7hrx.css';
import '../../css/a/a_lsuqbqm.css';
import '../../css/j/joty_yrzs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="jo3c-ysgb wm-shadow"/><path class="iaot_bb1t"/><path class="lwb3dou7m"/><path class="s6k3lxbkx"/><path class="uii1ffbpj wm-s"/><path class="nkois7hrx wm-s"/><path class="a_lsuqbqm wm-s"/><path class="joty_yrzs wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:heater"} {...others} />);
}

export default Component;
