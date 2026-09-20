import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h_k0u_bip.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="h_k0u_bip"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:sandbox-with-sand-trowel"} {...others} />);
}

export default Component;
