import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vk6vu-bip.css';
import '../../css/i/i_urbac4g.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="vk6vu-bip"/><path class="i_urbac4g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:sunraincloud"} {...others} />);
}

export default Component;
