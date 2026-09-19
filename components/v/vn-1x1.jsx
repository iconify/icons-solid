import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s62b32b6l.css';
import '../../css/d/d2kvgvbvc.css';
import '../../css/j/j3a0b6s5i.css';
import '../../css/i/icj42zygn.css';

const viewBox = {"width":512,"height":512};
const content = `<defs><clipPath id="SVGCUQTvdjP"><path class="s62b32b6l"/></clipPath></defs><g clip-path="url(#SVGCUQTvdjP)" transform="translate(-128)scale(.72249)" class="d2kvgvbvc"><path class="j3a0b6s5i"/><path class="icj42zygn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:vn-1x1"} {...others} />);
}

export default Component;
