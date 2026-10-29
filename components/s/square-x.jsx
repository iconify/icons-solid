import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/w/wzh0ixbqb.css';
import '../../css/m/mb8gb_27u.css';
import '../../css/p/pu_kvwbra.css';
import '../../css/h/hnwe6ebrj.css';
import '../../css/l/l833663_k.css';
import '../../css/h/h4glz0b0d.css';
import '../../css/w/w_zx28bfb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="wm-shadow wzh0ixbqb"/><path class="mb8gb_27u"/><path class="pu_kvwbra"/><path class="hnwe6ebrj"/><path class="l833663_k wm-shine"/><path class="h4glz0b0d wm-deco"/><path class="w_zx28bfb wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:square-x"} {...others} />);
}

export default Component;
