import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/u/uovqdhbyi.css';
import '../../css/v/vjae8jb8u.css';
import '../../css/r/r56ehqgoa.css';
import '../../css/o/oyw3m0bfr.css';
import '../../css/w/w6loiecla.css';
import '../../css/z/z-i6oz3zs.css';
import '../../css/x/xib3wbcmi.css';
import '../../css/q/q4vtl5bik.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="uovqdhbyi"/><path class="vjae8jb8u"/><path class="r56ehqgoa"/><path class="oyw3m0bfr"/><path class="w6loiecla"/><path class="z-i6oz3zs"/><path class="xib3wbcmi"/><path class="q4vtl5bik"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:ufo-2-linear"} {...others} />);
}

export default Component;
