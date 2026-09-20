import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8oo7gb6g.css';
import '../../css/x/xuug47bgf.css';
import '../../css/o/oeey5ac7z.css';
import '../../css/i/it6vk_b0t.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="n8oo7gb6g"><path class="xuug47bgf"/><path class="oeey5ac7z"/><path class="it6vk_b0t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:date-alt-star"} {...others} />);
}

export default Component;
