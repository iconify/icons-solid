import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bltugjkhs.css';
import '../../css/v/vq3qgrprl.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="bltugjkhs"/><path class="vq3qgrprl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:unregistry"} {...others} />);
}

export default Component;
