import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h03ps4baa.css';
import '../../css/z/zguspxbzd.css';
import '../../css/d/dq-em1bpm.css';
import '../../css/r/rw89hpyiy.css';

const viewBox = {"width":1515,"height":1521};
const content = `<defs><clipPath id="SVGFHW1gg7N" clipPathUnits="userSpaceOnUse"><path class="h03ps4baa"/></clipPath><clipPath id="SVGkpQchemR" clipPathUnits="userSpaceOnUse"><path class="zguspxbzd"/></clipPath></defs><g clip-path="url(#SVGFHW1gg7N)"><g clip-path="url(#SVGkpQchemR)"><path class="dq-em1bpm"/><path class="rw89hpyiy"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:newmont-dark"} {...others} />);
}

export default Component;
