import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t8i3-uijz.css';
import '../../css/d/d2kvgvbvc.css';
import '../../css/r/rl_ymab9k.css';
import '../../css/r/r5ogkxszf.css';

const viewBox = {"width":640,"height":480};
const content = `<defs><clipPath id="SVG7yqWtbFV"><path class="t8i3-uijz"/></clipPath></defs><g clip-path="url(#SVG7yqWtbFV)" transform="translate(80)scale(.9375)" class="d2kvgvbvc"><path class="rl_ymab9k"/><path class="r5ogkxszf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:vn-4x3"} {...others} />);
}

export default Component;
