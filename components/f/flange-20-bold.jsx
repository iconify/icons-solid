import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qxllr2mpy.css';
import '../../css/q/q3acjfbyd.css';
import '../../css/k/kzer2rmvy.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="qxllr2mpy"/><path class="q3acjfbyd"/><path class="kzer2rmvy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:flange-20-bold"} {...others} />);
}

export default Component;
