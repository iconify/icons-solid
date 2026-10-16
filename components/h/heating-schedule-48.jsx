import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/km_1fum4q.css';
import '../../css/s/s45evebmk.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="km_1fum4q"/><path class="s45evebmk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:heating-schedule-48"} {...others} />);
}

export default Component;
