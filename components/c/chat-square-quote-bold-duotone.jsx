import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rfpn6w7ca.css';
import '../../css/i/ifnhtt1oc.css';
import '../../css/n/ndygbv4bu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rfpn6w7ca"/><path clip-rule="evenodd" class="ifnhtt1oc"/><path clip-rule="evenodd" class="ndygbv4bu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:chat-square-quote-bold-duotone"} {...others} />);
}

export default Component;
