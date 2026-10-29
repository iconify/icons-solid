import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/w/wzh0ixbqb.css';
import '../../css/m/mb8gb_27u.css';
import '../../css/c/cvfnk-b7i.css';
import '../../css/t/t_9zzmgka.css';
import '../../css/m/mugr84r4w.css';
import '../../css/h/h4glz0b0d.css';
import '../../css/m/m6ufm34pt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="wm-shadow wzh0ixbqb"/><path class="mb8gb_27u"/><path class="cvfnk-b7i"/><path class="t_9zzmgka"/><path class="mugr84r4w wm-shine"/><path class="h4glz0b0d wm-deco"/><path class="m6ufm34pt wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:panel-right-close"} {...others} />);
}

export default Component;
