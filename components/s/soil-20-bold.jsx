import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j5-lt0yws.css';
import '../../css/p/p6ha02euk.css';
import '../../css/r/ro0uxekvs.css';
import '../../css/y/ybbr6lous.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="j5-lt0yws"/><path class="p6ha02euk"/><path class="ro0uxekvs"/><path class="ybbr6lous"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:soil-20-bold"} {...others} />);
}

export default Component;
