import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/a/aqf1r_khc.css';
import '../../css/l/l147rshrj.css';
import '../../css/h/hwzpu_m4y.css';
import '../../css/p/psm3w7b1q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="aqf1r_khc wm-shadow"/><path class="l147rshrj wm-shadow"/><path class="hwzpu_m4y"/><path class="psm3w7b1q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:shopping-bag"} {...others} />);
}

export default Component;
