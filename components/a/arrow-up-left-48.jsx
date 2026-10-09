import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t9bjgs55a.css';
import '../../css/w/wmiwqfb-m.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="t9bjgs55a"/><path class="wmiwqfb-m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:arrow-up-left-48"} {...others} />);
}

export default Component;
