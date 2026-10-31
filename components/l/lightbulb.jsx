import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/i/isnqgyblz.css';
import '../../css/t/te_whkbxy.css';
import '../../css/e/ewj4osbyb.css';
import '../../css/r/r235_rbxk.css';
import '../../css/n/nn0_b0bly.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="isnqgyblz wm-shadow"/><path class="te_whkbxy wm-shadow"/><path class="ewj4osbyb"/><path class="r235_rbxk"/><path class="nn0_b0bly"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:lightbulb"} {...others} />);
}

export default Component;
