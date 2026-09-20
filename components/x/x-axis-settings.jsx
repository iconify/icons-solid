import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/skybz2z3q.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="skybz2z3q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:x-axis-settings"} {...others} />);
}

export default Component;
