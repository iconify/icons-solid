import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/w8ir-dbdg.css';
import '../../css/u/uk36bgb0m.css';
import '../../css/z/zqntybzcz.css';
import '../../css/v/v2ysm4bpx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="w8ir-dbdg"/><path class="uk36bgb0m"/><path class="zqntybzcz"/><path class="v2ysm4bpx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixelarticons:coins"} {...others} />);
}

export default Component;
