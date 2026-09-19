import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jnt2i8b5v.css';
import '../../css/p/p2p39tb8n.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="jnt2i8b5v"/><path class="p2p39tb8n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon-plain:godot-wordmark"} {...others} />);
}

export default Component;
