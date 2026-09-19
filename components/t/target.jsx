import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/ctt4afbpl.css';
import '../../css/r/rjlz1ycng.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="ctt4afbpl"/><path class="rjlz1ycng"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"at-icons:target"} {...others} />);
}

export default Component;
