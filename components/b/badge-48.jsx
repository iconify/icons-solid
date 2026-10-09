import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k50n0vbya.css';
import '../../css/e/ei8ys-9zj.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="k50n0vbya"/><path class="ei8ys-9zj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:badge-48"} {...others} />);
}

export default Component;
