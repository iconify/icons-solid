import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jy6v7eb4r.css';
import '../../css/d/d2kvgvbvc.css';
import '../../css/y/yifbtub0f.css';
import '../../css/k/k3jz1jnlc.css';
import '../../css/g/gb9ydqb4e.css';

const viewBox = {"width":512,"height":512};
const content = `<defs><clipPath id="SVGIm7SndZc"><path class="jy6v7eb4r"/></clipPath></defs><g clip-path="url(#SVGIm7SndZc)" class="d2kvgvbvc"><path class="yifbtub0f"/><path class="k3jz1jnlc"/><path class="gb9ydqb4e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:ba-1x1"} {...others} />);
}

export default Component;
