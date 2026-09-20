import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/ll2orwbou.css';
import '../../css/d/d2kvgvbvc.css';
import '../../css/l/luok09b9t.css';

const viewBox = {"width":1563,"height":1428};
const content = `<defs><clipPath id="SVGd07GO19d" clipPathUnits="userSpaceOnUse"><path class="ll2orwbou"/></clipPath></defs><g clip-path="url(#SVGd07GO19d)" class="d2kvgvbvc"><path class="luok09b9t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:sabeco-light"} {...others} />);
}

export default Component;
