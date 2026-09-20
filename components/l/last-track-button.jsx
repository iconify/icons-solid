import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ij2x_72vy.css';
import '../../css/z/zz1s_3qhb.css';
import '../../css/c/cswrng7jb.css';

const viewBox = {"width":72,"height":72};
const content = `<g class="ij2x_72vy"><path class="zz1s_3qhb"/><path class="cswrng7jb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:last-track-button"} {...others} />);
}

export default Component;
