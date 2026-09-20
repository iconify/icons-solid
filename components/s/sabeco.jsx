import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/ll2orwbou.css';
import '../../css/n/n1lsf0bnc.css';
import '../../css/l/luok09b9t.css';

const viewBox = {"width":1563,"height":1428};
const content = `<defs><clipPath id="SVGd07GO19d" clipPathUnits="userSpaceOnUse"><path class="ll2orwbou"/></clipPath></defs><g clip-path="url(#SVGd07GO19d)" class="n1lsf0bnc"><path class="luok09b9t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg:sabeco"} {...others} />);
}

export default Component;
