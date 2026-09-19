import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vahsigbbz.css';
import '../../css/k/kxru1fbzg.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="cuyn6tgcc"><path class="vahsigbbz"/><rect class="kxru1fbzg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:center-focus-strong-bold"} {...others} />);
}

export default Component;
