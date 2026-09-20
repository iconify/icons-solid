import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8oo7gb6g.css';
import '../../css/u/umzh6pbaq.css';
import '../../css/w/wolk6_u5e.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="n8oo7gb6g"><path class="umzh6pbaq"/><path class="wolk6_u5e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:ruler-10"} {...others} />);
}

export default Component;
