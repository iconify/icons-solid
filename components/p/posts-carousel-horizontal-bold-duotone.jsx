import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/b/bjogh6b3n.css';
import '../../css/h/hlqi7zbwo.css';
import '../../css/m/m-unu3bmk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><g class="mc2zb0bvp"><path class="bjogh6b3n"/><path class="hlqi7zbwo"/></g><path class="m-unu3bmk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:posts-carousel-horizontal-bold-duotone"} {...others} />);
}

export default Component;
