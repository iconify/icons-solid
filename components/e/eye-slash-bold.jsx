import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nlbukzbvh.css';
import '../../css/n/nsvaqzcrz.css';
import '../../css/e/enxj31s0p.css';
import '../../css/b/bgasabkle.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="cuyn6tgcc"><path class="nlbukzbvh"/><path class="nsvaqzcrz"/><path class="enxj31s0p"/><path clip-rule="evenodd" class="bgasabkle"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:eye-slash-bold"} {...others} />);
}

export default Component;
