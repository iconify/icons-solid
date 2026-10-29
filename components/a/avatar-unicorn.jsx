import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/p/pcnrgcbfv.css';
import '../../css/t/tgsbm2b7n.css';
import '../../css/l/l0soopiya.css';
import '../../css/u/uwu060zrw.css';
import '../../css/d/de53ybjed.css';
import '../../css/d/dt8eg6c2h.css';
import '../../css/x/xxq69ub3y.css';
import '../../css/y/ytv9pib4p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="pcnrgcbfv wm-shadow"/><path class="tgsbm2b7n"/><path class="l0soopiya"/><path class="uwu060zrw"/><path class="de53ybjed"/><path class="dt8eg6c2h"/><path class="wm-shine xxq69ub3y"/><path class="wm-deco ytv9pib4p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:avatar-unicorn"} {...others} />);
}

export default Component;
