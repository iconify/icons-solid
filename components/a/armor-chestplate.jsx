import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jhwggsbdf.css';
import '../../css/r/rro2uvb6g.css';
import '../../css/r/r-v1_w-0v.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="jhwggsbdf"/><path class="rro2uvb6g"/><path class="r-v1_w-0v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"at-icons:armor-chestplate"} {...others} />);
}

export default Component;
