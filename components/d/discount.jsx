import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l6fv6ubfm.css';
import '../../css/w/wns-j0bej.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="l6fv6ubfm"/><path class="wns-j0bej"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:discount"} {...others} />);
}

export default Component;
