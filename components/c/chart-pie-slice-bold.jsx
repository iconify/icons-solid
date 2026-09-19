import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/c93tk2y7a.css';
import '../../css/i/i3pwgovdj.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="cuyn6tgcc"><path class="c93tk2y7a"/><path class="i3pwgovdj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:chart-pie-slice-bold"} {...others} />);
}

export default Component;
