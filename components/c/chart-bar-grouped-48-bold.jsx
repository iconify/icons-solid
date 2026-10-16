import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k8u9mrbde.css';
import '../../css/y/ygsi-xb-z.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="k8u9mrbde"/><path class="ygsi-xb-z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:chart-bar-grouped-48-bold"} {...others} />);
}

export default Component;
