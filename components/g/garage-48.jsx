import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hw7-9fnfj.css';
import '../../css/f/fu7nvvbdq.css';
import '../../css/n/n-t7_zj3n.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="hw7-9fnfj"/><path class="fu7nvvbdq"/><path class="n-t7_zj3n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:garage-48"} {...others} />);
}

export default Component;
