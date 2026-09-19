import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y5x9eib1w.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="y5x9eib1w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-solid:gas-pump"} {...others} />);
}

export default Component;
