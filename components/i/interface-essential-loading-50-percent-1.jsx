import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p-o-c1b4o.css';
import '../../css/x/xd2ndxbdp.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="p-o-c1b4o"/><path class="xd2ndxbdp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:interface-essential-loading-50-percent-1"} {...others} />);
}

export default Component;
