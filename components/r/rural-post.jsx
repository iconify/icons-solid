import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/p6z0y3b1u.css';
import '../../css/n/nzxkb6bsg.css';
import '../../css/g/gjraduyzd.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="p6z0y3b1u"/><path class="nzxkb6bsg"/><path class="gjraduyzd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:rural-post"} {...others} />);
}

export default Component;
