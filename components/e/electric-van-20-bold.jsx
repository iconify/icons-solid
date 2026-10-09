import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h3wfd7fjc.css';
import '../../css/c/ca1yglwsn.css';
import '../../css/u/ug_y5ht_e.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="h3wfd7fjc"/><path class="ca1yglwsn"/><path class="ug_y5ht_e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:electric-van-20-bold"} {...others} />);
}

export default Component;
