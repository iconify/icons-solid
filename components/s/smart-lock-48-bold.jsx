import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j7x4xxw4v.css';
import '../../css/u/u0i-r0xuj.css';
import '../../css/k/kp3nk_bmb.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="j7x4xxw4v"/><path class="u0i-r0xuj"/><path class="kp3nk_bmb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:smart-lock-48-bold"} {...others} />);
}

export default Component;
