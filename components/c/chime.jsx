import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/b8jnhibmg.css';
import '../../css/j/jac66gbbw.css';

const viewBox = {"width":193,"height":193,"left":-203,"top":444};
const content = `<g class="cuyn6tgcc"><path class="b8jnhibmg"/><path class="jac66gbbw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg:chime"} {...others} />);
}

export default Component;
