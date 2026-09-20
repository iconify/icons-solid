import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rnvbcbe-e.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="rnvbcbe-e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:prio-middle"} {...others} />);
}

export default Component;
