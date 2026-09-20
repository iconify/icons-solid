import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yj_r54n6x.css';
import '../../css/k/kuf42lb8e.css';
import '../../css/j/j455nerhl.css';
import '../../css/m/mp17olznx.css';

const viewBox = {"width":898,"height":217};
const content = `<clipPath id="SVGq7acidrh"><path class="yj_r54n6x"/></clipPath><g class="kuf42lb8e"><path class="j455nerhl"/><g clip-path="url(#SVGq7acidrh)"><path class="mp17olznx"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:pizza-hut"} {...others} />);
}

export default Component;
