import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/q/qds7mmgln.css';
import '../../css/u/u2_wjkb4f.css';
import '../../css/q/qew44nber.css';
import '../../css/k/kp4u9nbgh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="qds7mmgln wm-shadow"/><path class="u2_wjkb4f wm-shadow"/><path class="qew44nber"/><path class="kp4u9nbgh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:bell-concierge"} {...others} />);
}

export default Component;
