import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xfqlvd-8s.css';
import '../../css/k/kaoreac1y.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="xfqlvd-8s"/><path class="kaoreac1y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:rotate-ccw-48"} {...others} />);
}

export default Component;
