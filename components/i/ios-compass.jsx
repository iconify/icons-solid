import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lcgwv7b1e.css';
import '../../css/x/xjkzlbbry.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="lcgwv7b1e"/><path class="xjkzlbbry"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:ios-compass"} {...others} />);
}

export default Component;
