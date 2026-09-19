import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cu80eowpd.css';
import '../../css/s/s31t99skb.css';
import '../../css/u/uii4avzkv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cu80eowpd"/><circle class="s31t99skb"/><circle class="uii4avzkv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bxs:cart"} {...others} />);
}

export default Component;
