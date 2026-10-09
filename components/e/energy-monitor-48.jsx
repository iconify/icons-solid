import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b63tvfb8j.css';
import '../../css/h/hutzz7vvf.css';
import '../../css/x/xno-yqkug.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="b63tvfb8j"/><path class="hutzz7vvf"/><path class="xno-yqkug"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:energy-monitor-48"} {...others} />);
}

export default Component;
