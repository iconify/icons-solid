import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c815m4b3j.css';
import '../../css/x/xizs9ebfh.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="c815m4b3j"/><path class="xizs9ebfh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:kept-inventory"} {...others} />);
}

export default Component;
