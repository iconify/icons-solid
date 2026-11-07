import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pip5km_vy.css';
import '../../css/q/qnmkjnbmb.css';
import '../../css/y/yd0a0cc6y.css';
import '../../css/l/leb1eob0y.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pip5km_vy"/><path clip-rule="evenodd" class="qnmkjnbmb"/><path clip-rule="evenodd" class="yd0a0cc6y"/><path class="leb1eob0y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:chat-round-call-bold-duotone"} {...others} />);
}

export default Component;
