import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/z/zmusp90ao.css';
import '../../css/z/z7lvt8j3f.css';
import '../../css/f/fn-9lv5_s.css';
import '../../css/v/vxgxbi1of.css';
import '../../css/f/flpteqb2j.css';
import '../../css/j/jiwo9aczc.css';
import '../../css/f/fz3sfibmo.css';
import '../../css/l/lfe9id10l.css';
import '../../css/q/ql4kiob-r.css';
import '../../css/g/gz3kls-hq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="wm-shadow zmusp90ao"/><path class="z7lvt8j3f"/><path class="fn-9lv5_s"/><path class="vxgxbi1of"/><path class="flpteqb2j"/><path class="jiwo9aczc"/><path class="fz3sfibmo"/><path class="lfe9id10l wm-shine"/><path class="ql4kiob-r wm-shine"/><path class="gz3kls-hq wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:avatar-girl"} {...others} />);
}

export default Component;
