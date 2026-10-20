import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k8u9mrbde.css';
import '../../css/z/znkjny7ar.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="k8u9mrbde"/><path class="znkjny7ar"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:align-bottom-48-bold"} {...others} />);
}

export default Component;
