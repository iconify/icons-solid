import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sq_9-8b5f.css';
import '../../css/d/dfsy1hrxz.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="sq_9-8b5f"/><path class="dfsy1hrxz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:chart-network-48"} {...others} />);
}

export default Component;
