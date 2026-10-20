import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n9l2qqe6j.css';
import '../../css/g/g_9d-k8ca.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="n9l2qqe6j"/><path class="g_9d-k8ca"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:align-bottom-48"} {...others} />);
}

export default Component;
