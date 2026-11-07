import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kg5mtsbge.css';
import '../../css/e/eiwc-7x-k.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="kg5mtsbge"/><path class="eiwc-7x-k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:bluetooth-bold-duotone"} {...others} />);
}

export default Component;
