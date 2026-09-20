import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/ayk63p5nm.css';
import '../../css/e/e-2muiidk.css';
import '../../css/z/zqdqhkbce.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="ayk63p5nm"/><path class="e-2muiidk"/><path class="zqdqhkbce"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:grid-2x2-check-bold-duotone"} {...others} />);
}

export default Component;
