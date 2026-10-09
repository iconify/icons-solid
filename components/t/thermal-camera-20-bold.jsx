import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t1xd6acdc.css';
import '../../css/q/q_650fa-i.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="t1xd6acdc"/><path class="q_650fa-i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:thermal-camera-20-bold"} {...others} />);
}

export default Component;
