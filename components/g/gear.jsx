import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/no0fhnmcd.css';
import '../../css/e/eh-zx_4ry.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="no0fhnmcd"/><path class="eh-zx_4ry"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"rivet-icons:gear"} {...others} />);
}

export default Component;
