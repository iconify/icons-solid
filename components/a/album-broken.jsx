import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/x/xjhmwdbtu.css';
import '../../css/a/avzl98b-s.css';
import '../../css/z/z__g5t12m.css';
import '../../css/j/jzpwi7boj.css';
import '../../css/m/mrg39pbdx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="xjhmwdbtu"/><path class="avzl98b-s"/><path class="z__g5t12m"/><circle class="jzpwi7boj"/><path class="mrg39pbdx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:album-broken"} {...others} />);
}

export default Component;
