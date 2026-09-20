import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c8-dmccuw.css';
import '../../css/z/zr57spdxu.css';
import '../../css/p/pj5w3p1ws.css';

const viewBox = {"width":698,"height":583};
const content = `<g class="c8-dmccuw"><path class="zr57spdxu"/><path class="pj5w3p1ws"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:midjourney-dark"} {...others} />);
}

export default Component;
