import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/c/cl5xc3tem.css';
import '../../css/f/fegnn0rbv.css';
import '../../css/z/z0jigmbva.css';
import '../../css/b/b_g1ylbow.css';
import '../../css/n/n8u24ibpd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="cl5xc3tem wm-shadow"/><path class="fegnn0rbv"/><path class="z0jigmbva"/><path class="b_g1ylbow"/><path class="n8u24ibpd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:book"} {...others} />);
}

export default Component;
