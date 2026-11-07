import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/ql3j78bhl.css';
import '../../css/u/ueez_60su.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ql3j78bhl"/><path clip-rule="evenodd" class="ueez_60su"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:smart-vacuum-cleaner-bold"} {...others} />);
}

export default Component;
