import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/b/byvntmo1o.css';
import '../../css/m/mim48l7lv.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="wwvp95byt"><path class="byvntmo1o"/><path class="mim48l7lv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:exclamation-triangle"} {...others} />);
}

export default Component;
