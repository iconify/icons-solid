import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bzi9yltrz.css';
import '../../css/v/vnfqvfhnp.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="cuyn6tgcc"><path class="bzi9yltrz"/><path clip-rule="evenodd" class="vnfqvfhnp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:school-bus-bold"} {...others} />);
}

export default Component;
