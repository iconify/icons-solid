import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zdw9dcb7o.css';
import '../../css/k/k7kq1rbre.css';
import '../../css/k/kqihbsbtv.css';
import '../../css/t/tin0m_1mz.css';
import '../../css/y/yb7e76vhj.css';
import '../../css/o/orn06mbwj.css';
import '../../css/j/j9n-wgfhi.css';

const viewBox = {"width":256,"height":256};
const content = `<g class="ft5dv1b6b"><rect class="zdw9dcb7o"/><g clip-path="url(#SVGg3D4Hd7H)"><path class="k7kq1rbre"/><path class="kqihbsbtv"/><path class="tin0m_1mz"/><path class="yb7e76vhj"/><path class="orn06mbwj"/></g><defs><clipPath id="SVGg3D4Hd7H"><path class="j9n-wgfhi"/></clipPath></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"skill-icons:clojure-dark"} {...others} />);
}

export default Component;
