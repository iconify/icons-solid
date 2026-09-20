import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n60pvibmo.css';
import '../../css/k/kouf8lb9s.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="n60pvibmo"/><path class="kouf8lb9s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:business-product-piggy-bank"} {...others} />);
}

export default Component;
