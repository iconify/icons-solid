import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wdwt9o_ew.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="wdwt9o_ew"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:reddit-logo"} {...others} />);
}

export default Component;
