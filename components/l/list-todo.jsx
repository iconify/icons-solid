import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/g/gs1tuu68r.css';
import '../../css/b/bzowfzbjx.css';
import '../../css/i/ijwtjccnm.css';
import '../../css/z/zvq2mvbws.css';
import '../../css/q/qkrc0e1nb.css';
import '../../css/k/kpj6osihi.css';
import '../../css/w/wltxspb9c.css';
import '../../css/v/v58hby3rh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="gs1tuu68r wm-shadow"/><path class="bzowfzbjx"/><path class="ijwtjccnm"/><path class="zvq2mvbws"/><path class="qkrc0e1nb"/><path class="kpj6osihi"/><path class="wltxspb9c wm-shine"/><path class="v58hby3rh wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:list-todo"} {...others} />);
}

export default Component;
