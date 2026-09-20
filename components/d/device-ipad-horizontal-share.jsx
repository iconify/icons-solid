import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rezryb9cd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rezryb9cd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:device-ipad-horizontal-share"} {...others} />);
}

export default Component;
