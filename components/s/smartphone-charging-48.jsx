import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kyz2fo8fs.css';
import '../../css/q/q372t5bar.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="kyz2fo8fs"/><path class="q372t5bar"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:smartphone-charging-48"} {...others} />);
}

export default Component;
