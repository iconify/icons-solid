import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i9ojy9bhp.css';

const viewBox = {"width":1024,"height":768};
const content = `<path class="i9ojy9bhp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:batterytwenty"} {...others} />);
}

export default Component;
