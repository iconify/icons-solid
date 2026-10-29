import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/l/lylcbgbpa.css';
import '../../css/i/i4yj62xdd.css';
import '../../css/h/hdy4mbcyn.css';
import '../../css/c/csz1d63in.css';
import '../../css/w/wcljo0bnx.css';
import '../../css/j/joty_yrzs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="lylcbgbpa wm-shadow"/><path class="i4yj62xdd"/><path class="hdy4mbcyn"/><path class="csz1d63in"/><path class="wcljo0bnx wm-shine"/><path class="joty_yrzs wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:store"} {...others} />);
}

export default Component;
