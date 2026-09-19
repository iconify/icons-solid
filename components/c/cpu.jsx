import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fg1h69bdi.css';
import '../../css/r/rvvp7hmcr.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="fg1h69bdi"/><path class="rvvp7hmcr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"at-icons:cpu"} {...others} />);
}

export default Component;
