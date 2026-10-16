import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mytv6xbyl.css';
import '../../css/v/va8q5vg9j.css';
import '../../css/y/y8j-xvbmi.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="mytv6xbyl"/><path class="va8q5vg9j"/><path class="y8j-xvbmi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:greenhouse-48"} {...others} />);
}

export default Component;
