import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ob-pomunx.css';
import '../../css/v/vq2he1abb.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ob-pomunx"/><path class="vq2he1abb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:gas-turbine-48"} {...others} />);
}

export default Component;
