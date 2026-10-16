import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uzojfwbzi.css';
import '../../css/x/xym1wwbma.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="uzojfwbzi"/><path class="xym1wwbma"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:rain-gauge-48"} {...others} />);
}

export default Component;
