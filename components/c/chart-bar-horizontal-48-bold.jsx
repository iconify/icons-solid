import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t7lr-0b7o.css';
import '../../css/h/haai3or5p.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="t7lr-0b7o"/><path class="haai3or5p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:chart-bar-horizontal-48-bold"} {...others} />);
}

export default Component;
