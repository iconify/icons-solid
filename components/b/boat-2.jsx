import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8oo7gb6g.css';
import '../../css/y/yro32ohum.css';
import '../../css/g/ggpr0g_xj.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="n8oo7gb6g"><path class="yro32ohum"/><path class="ggpr0g_xj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:boat-2"} {...others} />);
}

export default Component;
