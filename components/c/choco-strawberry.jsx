import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/y/y7bem07hi.css';
import '../../css/b/bhm01_8ji.css';
import '../../css/j/j8gu6tumi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="y7bem07hi"/><path class="bhm01_8ji"/><path class="j8gu6tumi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:choco-strawberry"} {...others} />);
}

export default Component;
