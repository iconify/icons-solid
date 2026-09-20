import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t5fnum5ne.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="t5fnum5ne"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-setting-gauge-dashboard-2-bar-speed-test-loading-dashboard-internet-gauge-progress"} {...others} />);
}

export default Component;
