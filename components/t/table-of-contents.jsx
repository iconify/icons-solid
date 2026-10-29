import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/v/vx22j8bjs.css';
import '../../css/g/gfajqryza.css';
import '../../css/y/yqbwu262i.css';
import '../../css/g/gumt975rz.css';
import '../../css/t/tz1z64b3s.css';
import '../../css/n/npzvzdbbd.css';
import '../../css/a/albdygb5e.css';
import '../../css/b/ban2bjb2t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="vx22j8bjs wm-shadow"/><path class="gfajqryza"/><path class="yqbwu262i"/><path class="gumt975rz"/><path class="tz1z64b3s"/><path class="npzvzdbbd"/><path class="albdygb5e wm-shine"/><path class="ban2bjb2t wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:table-of-contents"} {...others} />);
}

export default Component;
