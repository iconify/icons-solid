import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c6_iq1b1e.css';

const viewBox = {"width":576,"height":512};
const content = `<path class="c6_iq1b1e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa6-solid:cart-arrow-down"} {...others} />);
}

export default Component;
