import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/tigk_k56q.css';
import '../../css/a/awiplkhke.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="cuyn6tgcc"><path class="tigk_k56q"/><path class="awiplkhke"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:arrow-long-bold"} {...others} />);
}

export default Component;
