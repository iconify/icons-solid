import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jy6v7eb4r.css';
import '../../css/d/d2kvgvbvc.css';
import '../../css/t/t7801vbuq.css';
import '../../css/n/nz9-tgbru.css';
import '../../css/m/m7qknkx5d.css';
import '../../css/h/hqlh97b5p.css';

const viewBox = {"width":512,"height":512};
const content = `<defs><clipPath id="SVGIm7SndZc"><path class="jy6v7eb4r"/></clipPath></defs><g clip-path="url(#SVGIm7SndZc)" class="d2kvgvbvc"><path class="t7801vbuq"/><path class="nz9-tgbru"/><path class="m7qknkx5d"/><path class="hqlh97b5p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:cu-1x1"} {...others} />);
}

export default Component;
