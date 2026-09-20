import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ffll-1b4k.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ffll-1b4k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:warning-rhomb"} {...others} />);
}

export default Component;
