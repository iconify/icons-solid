import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/l3ndfy7qu.css';
import '../../css/x/xcdktibdc.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="cuyn6tgcc"><path class="l3ndfy7qu"/><path class="xcdktibdc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:replay-bold"} {...others} />);
}

export default Component;
