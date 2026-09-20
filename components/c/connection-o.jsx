import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jn9fr8b3o.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/s-n7we4qa.css';
import '../../css/l/l7e4_hbhd.css';
import '../../css/d/ddn6n7b4g.css';
import '../../css/q/q3wxrhr7e.css';

const viewBox = {"width":40,"height":40};
const content = `<path class="jn9fr8b3o"/><g class="cuyn6tgcc"><path class="s-n7we4qa"/><path class="l7e4_hbhd"/><path class="ddn6n7b4g"/><path class="q3wxrhr7e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iwwa:connection-o"} {...others} />);
}

export default Component;
