import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f5tt7bcjs.css';
import '../../css/v/vxt0-sbfh.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="f5tt7bcjs"/><path class="vxt0-sbfh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:shopping-shipping-shipment-deliver"} {...others} />);
}

export default Component;
