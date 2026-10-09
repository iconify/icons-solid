import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/np--nab8s.css';
import '../../css/b/b31s_0bsf.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="np--nab8s"/><path class="b31s_0bsf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:send-horizontal-48-bold"} {...others} />);
}

export default Component;
