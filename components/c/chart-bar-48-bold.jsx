import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k8u9mrbde.css';
import '../../css/o/oum-_kb8y.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="k8u9mrbde"/><path class="oum-_kb8y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:chart-bar-48-bold"} {...others} />);
}

export default Component;
