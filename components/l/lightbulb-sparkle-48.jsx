import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hzwzl0bzs.css';
import '../../css/t/te6at6blm.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="hzwzl0bzs"/><path class="te6at6blm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:lightbulb-sparkle-48"} {...others} />);
}

export default Component;
