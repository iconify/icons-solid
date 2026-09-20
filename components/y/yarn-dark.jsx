import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m-3my0bau.css';
import '../../css/q/q5rya5b6h.css';
import '../../css/s/sm197_blj.css';
import '../../css/z/zfg4t82iy.css';
import '../../css/b/b91zp2o9n.css';
import '../../css/k/ka23owbtm.css';
import '../../css/k/kcwkk7a6e.css';
import '../../css/d/ddifiyccq.css';
import '../../css/j/j15ty4b9p.css';
import '../../css/j/j9n-wgfhi.css';

const viewBox = {"width":256,"height":256};
const content = `<g class="ft5dv1b6b"><g clip-path="url(#SVGv3WPqdcU)"><path class="m-3my0bau"/><g clip-path="url(#SVGg3D4Hd7H)"><path class="q5rya5b6h"/><path class="sm197_blj"/><path class="zfg4t82iy"/><path class="b91zp2o9n"/><path class="ka23owbtm"/><path class="kcwkk7a6e"/><path class="ddifiyccq"/></g></g><defs><clipPath id="SVGv3WPqdcU"><path class="j15ty4b9p"/></clipPath><clipPath id="SVGg3D4Hd7H"><path class="j9n-wgfhi"/></clipPath></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"skill-icons:yarn-dark"} {...others} />);
}

export default Component;
