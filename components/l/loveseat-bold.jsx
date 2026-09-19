import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nl8-p_oam.css';
import '../../css/w/waq7z7bxd.css';
import '../../css/j/j5lz2obhd.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="cuyn6tgcc"><path class="nl8-p_oam"/><path clip-rule="evenodd" class="waq7z7bxd"/><path class="j5lz2obhd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:loveseat-bold"} {...others} />);
}

export default Component;
