import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s68i8th-k.css';
import '../../css/r/r8211o0be.css';
import '../../css/j/j_9eze8nk.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="s68i8th-k"/><path class="r8211o0be"/><path class="j_9eze8nk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:offshore-wind-farm-48"} {...others} />);
}

export default Component;
