import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lv41xib2l.css';
import '../../css/r/rt09xibxu.css';

const viewBox = {"width":256,"height":256};
const content = `<g class="cuyn6tgcc"><path class="lv41xib2l"/><path class="rt09xibxu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pullo:restroom-duotone"} {...others} />);
}

export default Component;
