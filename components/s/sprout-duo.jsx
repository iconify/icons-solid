import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/c/cqv3lrb0z.css';
import '../../css/w/wneoubc6n.css';
import '../../css/z/z-a4k4b8u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="cqv3lrb0z"/><path class="wm-a wneoubc6n"/><path class="z-a4k4b8u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:sprout-duo"} {...others} />);
}

export default Component;
