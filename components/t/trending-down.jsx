import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/k/ke_-bl5ua.css';
import '../../css/i/iprbtxrqi.css';
import '../../css/p/p2lf0gbbk.css';
import '../../css/o/ol3gl_bwr.css';
import '../../css/r/rmqfx4b0w.css';
import '../../css/z/zyw_44vkt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="ke_-bl5ua wm-shadow"/><path class="iprbtxrqi"/><path class="p2lf0gbbk"/><path class="ol3gl_bwr"/><path class="rmqfx4b0w wm-shine"/><path class="wm-deco zyw_44vkt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:trending-down"} {...others} />);
}

export default Component;
