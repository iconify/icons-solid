import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j1_g_if2b.css';
import '../../css/h/hntgybcog.css';
import '../../css/c/cpnkntywn.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><path id="SVGezrOSaGs" class="j1_g_if2b"/></defs><g class="hntgybcog"><path class="cpnkntywn"/><use href="#SVGezrOSaGs"/><use href="#SVGezrOSaGs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:frame5"} {...others} />);
}

export default Component;
