import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pia1jk4qr.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="pia1jk4qr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:shipment-delivery"} {...others} />);
}

export default Component;
