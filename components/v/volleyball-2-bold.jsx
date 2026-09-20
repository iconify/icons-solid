import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rzzy5jjev.css';
import '../../css/b/big4d8t5q.css';
import '../../css/d/dv6lf562e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="rzzy5jjev"/><path class="big4d8t5q"/><path class="dv6lf562e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:volleyball-2-bold"} {...others} />);
}

export default Component;
