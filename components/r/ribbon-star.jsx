import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zv7kvd05e.css';
import '../../css/c/cpmjwca9p.css';
import '../../css/c/c9fy1mkgc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="zv7kvd05e"/><path class="cpmjwca9p"/><path class="c9fy1mkgc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"proicons:ribbon-star"} {...others} />);
}

export default Component;
