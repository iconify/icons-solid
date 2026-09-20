import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i64o46y4z.css';
import '../../css/g/ga5bx4--p.css';
import '../../css/p/p231qtbtj.css';
import '../../css/j/j9-q1ustb.css';
import '../../css/j/j9t8dhnvh.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="i64o46y4z"/><path class="ga5bx4--p"/><path class="p231qtbtj"/><path class="j9-q1ustb"/><path class="j9t8dhnvh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:cloud-share"} {...others} />);
}

export default Component;
