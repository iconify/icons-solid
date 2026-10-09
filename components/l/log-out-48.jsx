import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jqlp_3l8j.css';
import '../../css/x/xajndacdt.css';
import '../../css/t/tco_xthkd.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="jqlp_3l8j"/><path class="xajndacdt"/><path class="tco_xthkd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:log-out-48"} {...others} />);
}

export default Component;
