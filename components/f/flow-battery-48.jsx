import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nvvf71v4s.css';
import '../../css/k/krurd6_gq.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="nvvf71v4s"/><path class="krurd6_gq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:flow-battery-48"} {...others} />);
}

export default Component;
