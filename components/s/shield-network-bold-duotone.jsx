import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u6hevcvfn.css';
import '../../css/t/t3y9293jz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="u6hevcvfn"/><path clip-rule="evenodd" class="t3y9293jz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:shield-network-bold-duotone"} {...others} />);
}

export default Component;
