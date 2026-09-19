import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yny9m0b3s.css';
import '../../css/y/yq7ja8j5f.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="yny9m0b3s"/><path class="yq7ja8j5f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"at-icons:glass-pane"} {...others} />);
}

export default Component;
