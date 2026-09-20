import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tz3uhdcoz.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="tz3uhdcoz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"subway:right-arrow-1"} {...others} />);
}

export default Component;
