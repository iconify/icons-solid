import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n268975wj.css';
import '../../css/x/x4u8pbwjc.css';
import '../../css/n/n7-7dxb-l.css';
import '../../css/n/nif4azczd.css';
import '../../css/e/evwt8txeq.css';
import '../../css/b/bwu3fgbhr.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/m/ml6fy992t.css';
import '../../css/t/tk_en0b1x.css';
import '../../css/g/g3ex09-_j.css';

const viewBox = {"width":72,"height":72};
const content = `<defs><path id="SVGLgeGLeDq" class="n268975wj"/></defs><g class="x4u8pbwjc"><path class="n7-7dxb-l"/><use href="#SVGLgeGLeDq"/><use href="#SVGLgeGLeDq"/></g><g class="nif4azczd"><path class="evwt8txeq"/><path class="bwu3fgbhr"/></g><g class="ij2x_72vy"><path class="ml6fy992t"/><path class="tk_en0b1x"/><path class="g3ex09-_j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:flexed-biceps"} {...others} />);
}

export default Component;
