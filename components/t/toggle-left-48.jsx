import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k8z5zjbsy.css';
import '../../css/q/qfevtc50w.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="k8z5zjbsy"/><path class="qfevtc50w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:toggle-left-48"} {...others} />);
}

export default Component;
