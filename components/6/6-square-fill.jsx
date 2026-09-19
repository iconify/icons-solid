import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pvj2d0gvb.css';
import '../../css/s/szjelmklw.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="pvj2d0gvb"/><path class="szjelmklw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:6-square-fill"} {...others} />);
}

export default Component;
