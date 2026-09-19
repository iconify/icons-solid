import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/u2wwpnb4g.css';
import '../../css/s/s2cicwbnt.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="cuyn6tgcc"><path class="u2wwpnb4g"/><path clip-rule="evenodd" class="s2cicwbnt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:disc-bold"} {...others} />);
}

export default Component;
