import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zsl7u1bsc.css';

const viewBox = {"width":640,"height":512};
const content = `<path class="zsl7u1bsc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa6-solid:handshake-angle"} {...others} />);
}

export default Component;
