import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/j/jlk_j95me.css';
import '../../css/o/oxc4onk6u.css';
import '../../css/i/iufz78p1h.css';
import '../../css/r/rpofv9b7j.css';
import '../../css/y/yep6zgrik.css';
import '../../css/j/joi0p1blu.css';
import '../../css/r/rivqdhb9r.css';
import '../../css/c/cmllchbmk.css';
import '../../css/x/xy0kmfbis.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="jlk_j95me wm-shadow"/><path class="oxc4onk6u"/><path class="iufz78p1h"/><path class="rpofv9b7j"/><path class="yep6zgrik"/><path class="joi0p1blu"/><path class="rivqdhb9r"/><path class="cmllchbmk wm-shine"/><path class="wm-deco xy0kmfbis"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:house-wifi"} {...others} />);
}

export default Component;
