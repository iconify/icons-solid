import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qtlwvibtj.css';
import '../../css/z/z3azmnbhz.css';
import '../../css/t/t5f3tsppg.css';
import '../../css/m/mzjq7bp9w.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="cuyn6tgcc"><path class="qtlwvibtj"/><path clip-rule="evenodd" class="z3azmnbhz"/><path clip-rule="evenodd" class="t5f3tsppg"/><path class="mzjq7bp9w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:car-wash-bold"} {...others} />);
}

export default Component;
