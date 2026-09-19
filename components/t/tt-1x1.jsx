import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/erzf03bmv.css';
import '../../css/d/d2kvgvbvc.css';
import '../../css/f/fch06fn7n.css';
import '../../css/p/p6oy09bhi.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="erzf03bmv"/><g class="d2kvgvbvc"><path class="fch06fn7n"/><path class="p6oy09bhi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:tt-1x1"} {...others} />);
}

export default Component;
