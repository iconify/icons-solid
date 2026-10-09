import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tr_39t36c.css';
import '../../css/h/hbfz0nbow.css';
import '../../css/h/h42y6kbni.css';
import '../../css/n/nh_ku8lgf.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="tr_39t36c"/><path class="hbfz0nbow"/><path class="h42y6kbni"/><path class="nh_ku8lgf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:battery-recycle-48"} {...others} />);
}

export default Component;
