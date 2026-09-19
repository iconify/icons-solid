import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/j/j8-bju_yg.css';
import '../../css/l/lyvu_j98b.css';
import '../../css/y/y01qu0bsu.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="wwvp95byt"><path class="j8-bju_yg"/><path class="lyvu_j98b"/><path class="y01qu0bsu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:shopping-cart-1"} {...others} />);
}

export default Component;
