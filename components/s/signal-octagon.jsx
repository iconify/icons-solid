import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pkzqhbcmn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pkzqhbcmn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:signal-octagon"} {...others} />);
}

export default Component;
