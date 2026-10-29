import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/w/wzh0ixbqb.css';
import '../../css/m/mb8gb_27u.css';
import '../../css/t/t6s-htb7s.css';
import '../../css/h/h9kaa-r7p.css';
import '../../css/m/mugr84r4w.css';
import '../../css/h/h4glz0b0d.css';
import '../../css/w/w_zx28bfb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="wm-shadow wzh0ixbqb"/><path class="mb8gb_27u"/><path class="t6s-htb7s"/><path class="h9kaa-r7p"/><path class="mugr84r4w wm-shine"/><path class="h4glz0b0d wm-deco"/><path class="w_zx28bfb wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:panel-right"} {...others} />);
}

export default Component;
