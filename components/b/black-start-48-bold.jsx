import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k4b25kb_a.css';
import '../../css/e/ep5y64b3e.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="k4b25kb_a"/><path class="ep5y64b3e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:black-start-48-bold"} {...others} />);
}

export default Component;
