import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bdahbrsqi.css';
import '../../css/z/zt1dysdrf.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="bdahbrsqi"/><path class="zt1dysdrf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cil:chat-bubble"} {...others} />);
}

export default Component;
