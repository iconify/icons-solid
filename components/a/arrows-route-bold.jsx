import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/x-cnl0qxl.css';
import '../../css/c/c5zqifb9x.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="cuyn6tgcc"><path class="x-cnl0qxl"/><path class="c5zqifb9x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:arrows-route-bold"} {...others} />);
}

export default Component;
