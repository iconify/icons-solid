import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mrnj0it8e.css';
import '../../css/c/c6v2y2bpk.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="cuyn6tgcc"><path class="mrnj0it8e"/><path clip-rule="evenodd" class="c6v2y2bpk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:tachometer-5-bold"} {...others} />);
}

export default Component;
