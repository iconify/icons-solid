import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lr2f8pbje.css';
import '../../css/c/ch9w-bbsi.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="lr2f8pbje"/><path class="ch9w-bbsi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:notification-remove-bold-duotone"} {...others} />);
}

export default Component;
