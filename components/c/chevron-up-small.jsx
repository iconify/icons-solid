import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tc4x_wb4t.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="tc4x_wb4t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:chevron-up-small"} {...others} />);
}

export default Component;
