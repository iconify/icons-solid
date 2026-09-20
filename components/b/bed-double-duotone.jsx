import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/c95_x43_s.css';
import '../../css/r/rhh7ig_cv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="c95_x43_s"/><path clip-rule="evenodd" class="rhh7ig_cv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:bed-double-duotone"} {...others} />);
}

export default Component;
