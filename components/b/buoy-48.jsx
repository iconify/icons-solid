import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sqbbhusyr.css';
import '../../css/q/qnl7h7qtq.css';
import '../../css/i/iciarnbnr.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="sqbbhusyr"/><path class="qnl7h7qtq"/><path class="iciarnbnr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:buoy-48"} {...others} />);
}

export default Component;
