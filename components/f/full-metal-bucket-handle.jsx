import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/ns-s0jb2n.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ns-s0jb2n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:full-metal-bucket-handle"} {...others} />);
}

export default Component;
