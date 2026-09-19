import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn_x9rbog.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yygk5x3fo.css';

const viewBox = {"width":80,"height":80};
const content = `<defs><path id="SVGBitEHdeU" class="xn_x9rbog"/></defs><g class="cuyn6tgcc"><use href="#SVGBitEHdeU"/><path clip-rule="evenodd" class="yygk5x3fo"/><use href="#SVGBitEHdeU"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:wifi-100-bold"} {...others} />);
}

export default Component;
