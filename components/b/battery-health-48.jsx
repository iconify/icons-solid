import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hvdhc8bfy.css';
import '../../css/d/dnfd7hb8j.css';
import '../../css/p/pd5-qwbqx.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="hvdhc8bfy"/><path class="dnfd7hb8j"/><path class="pd5-qwbqx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:battery-health-48"} {...others} />);
}

export default Component;
