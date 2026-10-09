import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xhpycbbzt.css';
import '../../css/g/gxdkw6pqr.css';
import '../../css/k/kp3z9vp1s.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="xhpycbbzt"/><path class="gxdkw6pqr"/><path class="kp3z9vp1s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:gift-48"} {...others} />);
}

export default Component;
