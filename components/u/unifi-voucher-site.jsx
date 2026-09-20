import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/okm5t4bxo.css';
import '../../css/k/kv90-5mju.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="okm5t4bxo"/><path class="kv90-5mju"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:unifi-voucher-site"} {...others} />);
}

export default Component;
