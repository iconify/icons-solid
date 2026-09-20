import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/ln6t6pbsd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ln6t6pbsd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:payment-on-delivery"} {...others} />);
}

export default Component;
