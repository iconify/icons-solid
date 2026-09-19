import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q1z8q8b9y.css';

const viewBox = {"width":12,"height":12};
const content = `<path class="q1z8q8b9y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"dinkie-icons:waning-gibbous-moon-symbol"} {...others} />);
}

export default Component;
