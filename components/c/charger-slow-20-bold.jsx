import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xo62-ybxn.css';
import '../../css/q/qxpl-b1jp.css';
import '../../css/y/yghwv6byq.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="xo62-ybxn"/><path class="qxpl-b1jp"/><path class="yghwv6byq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:charger-slow-20-bold"} {...others} />);
}

export default Component;
