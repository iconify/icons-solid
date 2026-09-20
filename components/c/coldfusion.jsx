import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cao2c2b5u.css';
import '../../css/u/uzai71bdu.css';
import '../../css/k/kyq_3rbhd.css';
import '../../css/j/jmon4qjrz.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><g clip-path="url(#SVGmAhx2dHO)"><path class="cao2c2b5u"/><path clip-rule="evenodd" class="uzai71bdu"/><path clip-rule="evenodd" class="kyq_3rbhd"/></g><defs><clipPath id="SVGmAhx2dHO"><path class="jmon4qjrz"/></clipPath></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:coldfusion"} {...others} />);
}

export default Component;
