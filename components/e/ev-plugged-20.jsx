import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lo7q5s88y.css';
import '../../css/s/s_8gwxbem.css';
import '../../css/q/q7wl5khmr.css';
import '../../css/m/m6p15ub_a.css';
import '../../css/x/xe6_rlbou.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="lo7q5s88y"/><path class="s_8gwxbem"/><path class="q7wl5khmr"/><path class="m6p15ub_a"/><path class="xe6_rlbou"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:ev-plugged-20"} {...others} />);
}

export default Component;
