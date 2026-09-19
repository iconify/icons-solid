import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nxsbg2x6k.css';
import '../../css/c/cobwtfbfx.css';
import '../../css/k/k-6yl9e2n.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="cuyn6tgcc"><rect class="nxsbg2x6k"/><path clip-rule="evenodd" class="cobwtfbfx"/><path class="k-6yl9e2n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:camcorder-bold"} {...others} />);
}

export default Component;
