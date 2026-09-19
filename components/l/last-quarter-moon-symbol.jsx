import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cftt4jdtj.css';

const viewBox = {"width":12,"height":12};
const content = `<path class="cftt4jdtj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"dinkie-icons:last-quarter-moon-symbol"} {...others} />);
}

export default Component;
