import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yo8h5wjec.css';
import '../../css/f/fiu865j_r.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/q/q4e16vbts.css';

const viewBox = {"width":72,"height":72};
const content = `<defs><path id="SVGvRhvVbdy" class="yo8h5wjec"/></defs><path class="fiu865j_r"/><g class="ij2x_72vy"><path class="q4e16vbts"/><use href="#SVGvRhvVbdy"/><use href="#SVGvRhvVbdy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:right-facing-fist-medium-dark-skin-tone"} {...others} />);
}

export default Component;
