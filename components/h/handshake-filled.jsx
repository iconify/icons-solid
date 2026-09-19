import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yxjj8npel.css';
import '../../css/l/l2afcqtvn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yxjj8npel"/><path class="l2afcqtvn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:handshake-filled"} {...others} />);
}

export default Component;
