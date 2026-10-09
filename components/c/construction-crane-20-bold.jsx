import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/scv2f5bpz.css';
import '../../css/x/xk2zqv2dn.css';
import '../../css/g/g33vo8vvy.css';
import '../../css/u/um41547jn.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="scv2f5bpz"/><path class="xk2zqv2dn"/><path class="g33vo8vvy"/><path class="um41547jn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:construction-crane-20-bold"} {...others} />);
}

export default Component;
