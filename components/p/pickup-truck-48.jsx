import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/ho23u0lfr.css';
import '../../css/w/wd1lkbb-n.css';
import '../../css/t/t_7qy9b-e.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ho23u0lfr"/><path class="wd1lkbb-n"/><path class="t_7qy9b-e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:pickup-truck-48"} {...others} />);
}

export default Component;
