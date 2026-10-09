import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v8xbdfbrh.css';
import '../../css/h/hok4abbfh.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="v8xbdfbrh"/><path class="hok4abbfh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:history-48"} {...others} />);
}

export default Component;
