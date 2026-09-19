import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/x_8jg4bbr.css';
import '../../css/s/saxycbruq.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="cuyn6tgcc"><path class="x_8jg4bbr"/><path class="saxycbruq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:envelope-open-bold"} {...others} />);
}

export default Component;
