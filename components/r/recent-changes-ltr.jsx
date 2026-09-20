import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/arx7bg38m.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="arx7bg38m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ooui:recent-changes-ltr"} {...others} />);
}

export default Component;
