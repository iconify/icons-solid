import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/l44s8pbzo.css';
import '../../css/w/wh-sojvvh.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="cuyn6tgcc"><path class="l44s8pbzo"/><path class="wh-sojvvh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:bezier-triangle-bold"} {...others} />);
}

export default Component;
