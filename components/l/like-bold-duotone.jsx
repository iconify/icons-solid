import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qz43omb9k.css';
import '../../css/h/hsrg7muou.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qz43omb9k"/><path clip-rule="evenodd" class="hsrg7muou"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:like-bold-duotone"} {...others} />);
}

export default Component;
