import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/ra_a-eb3h.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ra_a-eb3h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:contactless-payment-circle"} {...others} />);
}

export default Component;
