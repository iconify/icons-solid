import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kfc4gej4t.css';
import '../../css/d/d2kvgvbvc.css';
import '../../css/t/t7801vbuq.css';
import '../../css/n/nz9-tgbru.css';
import '../../css/m/m7qknkx5d.css';
import '../../css/h/hqlh97b5p.css';

const viewBox = {"width":640,"height":480};
const content = `<defs><clipPath id="SVGzpKn0cFh"><path class="kfc4gej4t"/></clipPath></defs><g clip-path="url(#SVGzpKn0cFh)" transform="translate(30)scale(.94)" class="d2kvgvbvc"><path class="t7801vbuq"/><path class="nz9-tgbru"/><path class="m7qknkx5d"/><path class="hqlh97b5p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:cu-4x3"} {...others} />);
}

export default Component;
