import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s8fh6bcax.css';
import '../../css/b/bxc0s0-hm.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="s8fh6bcax"/><path class="bxc0s0-hm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:woocommerce"} {...others} />);
}

export default Component;
