import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/ti24kfb9v.css';
import '../../css/s/sx_geyq0r.css';
import '../../css/v/vn82uub4i.css';
import '../../css/a/akw58pb3k.css';
import '../../css/l/lo_2ujbjk.css';

const viewBox = {"width":640,"height":480};
const content = `<defs><clipPath id="SVGzrOc1cVe"><path class="ti24kfb9v"/></clipPath></defs><g clip-path="url(#SVGzrOc1cVe)" transform="translate(78 -32)" class="sx_geyq0r"><path class="vn82uub4i"/><path class="akw58pb3k"/><path class="lo_2ujbjk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:fo-4x3"} {...others} />);
}

export default Component;
