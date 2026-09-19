import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s31t99skb.css';
import '../../css/u/uii4avzkv.css';
import '../../css/j/jzxxb032s.css';

const viewBox = {"width":24,"height":24};
const content = `<circle class="s31t99skb"/><circle class="uii4avzkv"/><path class="jzxxb032s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bxs-cart-download"} {...others} />);
}

export default Component;
