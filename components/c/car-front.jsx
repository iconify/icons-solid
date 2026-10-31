import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/o/ow6rsf1wk.css';
import '../../css/x/xrekrwbxx.css';
import '../../css/f/fa1b6ybdf.css';
import '../../css/t/t23vlcl0v.css';
import '../../css/o/opjlracts.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="ow6rsf1wk wm-shadow"/><path class="wm-shadow xrekrwbxx"/><path class="fa1b6ybdf"/><path class="t23vlcl0v"/><path class="opjlracts"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:car-front"} {...others} />);
}

export default Component;
