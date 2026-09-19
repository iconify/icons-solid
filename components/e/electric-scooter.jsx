import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/t/tp0xbbu1o.css';
import '../../css/i/in5jxro8g.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="y9tr6bcfx"><path class="tp0xbbu1o"/><path class="in5jxro8g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:electric-scooter"} {...others} />);
}

export default Component;
