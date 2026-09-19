import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rmanxnaqh.css';
import '../../css/h/h8v7_hsyz.css';
import '../../css/t/tktzuhbfv.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="cuyn6tgcc"><path class="rmanxnaqh"/><path clip-rule="evenodd" class="h8v7_hsyz"/><path class="tktzuhbfv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:image-bold"} {...others} />);
}

export default Component;
