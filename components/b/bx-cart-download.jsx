import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s31t99skb.css';
import '../../css/u/uii4avzkv.css';
import '../../css/d/drt_omb2n.css';
import '../../css/v/vi7rz9k8t.css';

const viewBox = {"width":24,"height":24};
const content = `<circle class="s31t99skb"/><circle class="uii4avzkv"/><path class="drt_omb2n"/><path class="vi7rz9k8t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bx-cart-download"} {...others} />);
}

export default Component;
