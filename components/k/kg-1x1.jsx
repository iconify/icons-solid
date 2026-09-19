import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m0zgyobhy.css';
import '../../css/s/su9vssb1b.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="m0zgyobhy"/><path class="su9vssb1b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:kg-1x1"} {...others} />);
}

export default Component;
