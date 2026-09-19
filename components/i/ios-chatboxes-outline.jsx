import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ejq_vxbcb.css';
import '../../css/q/qcygcjg0a.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ejq_vxbcb"/><path class="qcygcjg0a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:ios-chatboxes-outline"} {...others} />);
}

export default Component;
