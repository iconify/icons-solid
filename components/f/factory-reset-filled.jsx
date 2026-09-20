import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dcyyobc0n.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="dcyyobc0n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:factory-reset-filled"} {...others} />);
}

export default Component;
