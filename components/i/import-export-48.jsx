import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/di7upcblc.css';
import '../../css/o/o5gtl8zhh.css';
import '../../css/w/we-nd7j-a.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="di7upcblc"/><path class="o5gtl8zhh"/><path class="we-nd7j-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:import-export-48"} {...others} />);
}

export default Component;
