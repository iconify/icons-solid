import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in_8m6pkn.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="in_8m6pkn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:shopping-shipping-barcode"} {...others} />);
}

export default Component;
