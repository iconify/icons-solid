import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nv6lo7unl.css';
import '../../css/g/g_ay5sxqi.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="cuyn6tgcc"><path class="nv6lo7unl"/><path class="g_ay5sxqi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:search-1-bold"} {...others} />);
}

export default Component;
