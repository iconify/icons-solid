import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rmfthdbsp.css';
import '../../css/w/w1s0n4bzt.css';
import '../../css/v/vij3r-vuu.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="rmfthdbsp"/><path class="w1s0n4bzt"/><path class="vij3r-vuu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:cash-register-20-bold"} {...others} />);
}

export default Component;
