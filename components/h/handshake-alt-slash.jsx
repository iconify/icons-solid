import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nkgh3ntpc.css';

const viewBox = {"width":640,"height":512};
const content = `<path class="nkgh3ntpc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-solid:handshake-alt-slash"} {...others} />);
}

export default Component;
