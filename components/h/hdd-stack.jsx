import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/j0lod_6vu.css';
import '../../css/p/pjnhxqb5g.css';
import '../../css/l/lvoxeyxvq.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="j0lod_6vu"/><path class="pjnhxqb5g"/><path class="lvoxeyxvq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:hdd-stack"} {...others} />);
}

export default Component;
