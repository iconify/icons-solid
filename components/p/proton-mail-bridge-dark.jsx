import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vtds4obsx.css';
import '../../css/x/xxyq6_bip.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="vtds4obsx"/><path class="xxyq6_bip"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:proton-mail-bridge-dark"} {...others} />);
}

export default Component;
