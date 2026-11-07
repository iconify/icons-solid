import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/z/z6g8x2zmx.css';
import '../../css/u/usqinzbwd.css';
import '../../css/j/j7lpo2bzk.css';
import '../../css/y/yirxaabex.css';
import '../../css/b/blcyz-6fj.css';
import '../../css/q/q27ay4bxg.css';
import '../../css/g/gg65u8b7q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="z6g8x2zmx"/><path class="usqinzbwd"/><path class="j7lpo2bzk"/><path class="yirxaabex"/><path class="blcyz-6fj"/><path class="q27ay4bxg"/><path class="gg65u8b7q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:bath-linear"} {...others} />);
}

export default Component;
