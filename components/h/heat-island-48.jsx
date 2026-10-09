import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mnmx-0bxp.css';
import '../../css/h/h84xrioyd.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="mnmx-0bxp"/><path class="h84xrioyd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:heat-island-48"} {...others} />);
}

export default Component;
