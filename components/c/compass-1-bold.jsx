import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jwztj5b9y.css';
import '../../css/r/r0ghptbtp.css';
import '../../css/y/ynwa9-bwp.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="jwztj5b9y"/><path clip-rule="evenodd" class="r0ghptbtp"/><path class="ynwa9-bwp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:compass-1-bold"} {...others} />);
}

export default Component;
