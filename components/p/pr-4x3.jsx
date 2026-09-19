import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/igbmrv_zy.css';
import '../../css/d/d2kvgvbvc.css';
import '../../css/o/ox0xxbb9b.css';
import '../../css/c/cubs0tg_k.css';
import '../../css/a/a5lh9m44y.css';
import '../../css/z/z2db60b7g.css';

const viewBox = {"width":640,"height":480};
const content = `<defs><clipPath id="SVGrABbKdrq"><path class="igbmrv_zy"/></clipPath></defs><g clip-path="url(#SVGrABbKdrq)" transform="translate(35)scale(.9375)" class="d2kvgvbvc"><path class="ox0xxbb9b"/><path class="cubs0tg_k"/><path class="a5lh9m44y"/><path class="z2db60b7g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:pr-4x3"} {...others} />);
}

export default Component;
