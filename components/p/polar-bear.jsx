import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/ne2ohjbtv.css';
import '../../css/t/tb25r3blk.css';
import '../../css/g/g7z6zobjr.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="ne2ohjbtv"/><path class="tb25r3blk"/><path class="g7z6zobjr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:polar-bear"} {...others} />);
}

export default Component;
