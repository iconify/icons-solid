import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qf6yznbcv.css';
import '../../css/u/umffgfyvn.css';
import '../../css/b/bfrkm3b3j.css';
import '../../css/z/z4vz-wxoh.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="qf6yznbcv"/><path class="umffgfyvn"/><path class="bfrkm3b3j"/><path class="z4vz-wxoh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:man-deaf"} {...others} />);
}

export default Component;
