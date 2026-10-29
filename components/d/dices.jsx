import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/w/wbzwd9bxw.css';
import '../../css/m/me19jwbmb.css';
import '../../css/n/n768tjber.css';
import '../../css/z/zlfiogbby.css';
import '../../css/f/fz7fol88x.css';
import '../../css/f/fk-r76bmq.css';
import '../../css/t/t20ne0f3d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="wbzwd9bxw wm-shadow"/><path class="me19jwbmb"/><path class="n768tjber"/><path class="zlfiogbby"/><path class="fz7fol88x"/><path class="fk-r76bmq wm-shine"/><path class="t20ne0f3d wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:dices"} {...others} />);
}

export default Component;
