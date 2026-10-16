import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yg5b9ebia.css';
import '../../css/h/hrfcglb8n.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="yg5b9ebia"/><path class="hrfcglb8n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:bell-snooze-48-bold"} {...others} />);
}

export default Component;
