import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/avjgpmkfp.css';
import '../../css/d/dd3vljzrf.css';
import '../../css/r/rd9jhd3hp.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="avjgpmkfp"/><path class="dd3vljzrf"/><path class="rd9jhd3hp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:hydrogen-truck-48-bold"} {...others} />);
}

export default Component;
