import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/znfp4jbnv.css';
import '../../css/s/s31t99skb.css';
import '../../css/p/pvk172brt.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="znfp4jbnv"/><circle class="s31t99skb"/><circle class="pvk172brt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bxs-cart-alt"} {...others} />);
}

export default Component;
