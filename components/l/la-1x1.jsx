import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s62b32b6l.css';
import '../../css/d/d2kvgvbvc.css';
import '../../css/u/upeq8jbqk.css';
import '../../css/n/n-dj-19vw.css';
import '../../css/z/z8-9-wjaq.css';

const viewBox = {"width":512,"height":512};
const content = `<defs><clipPath id="SVGCUQTvdjP"><path class="s62b32b6l"/></clipPath></defs><g clip-path="url(#SVGCUQTvdjP)" transform="translate(-128)scale(.72249)" class="d2kvgvbvc"><path class="upeq8jbqk"/><path class="n-dj-19vw"/><path class="z8-9-wjaq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:la-1x1"} {...others} />);
}

export default Component;
