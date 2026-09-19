import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/ydf4e9b3x.css';
import '../../css/x/xx7raej9t.css';
import '../../css/d/db2dyn3zs.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="ydf4e9b3x"/><path class="xx7raej9t"/><path class="db2dyn3zs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:sun-1-bold"} {...others} />);
}

export default Component;
