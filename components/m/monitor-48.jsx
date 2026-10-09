import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xszfmab4u.css';
import '../../css/e/ezx2ctbsk.css';
import '../../css/n/nh3pp-bwc.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="xszfmab4u"/><path class="ezx2ctbsk"/><path class="nh3pp-bwc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:monitor-48"} {...others} />);
}

export default Component;
