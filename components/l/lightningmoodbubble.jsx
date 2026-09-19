import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zw4hi5b4t.css';
import '../../css/r/r5yjrccli.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="zw4hi5b4t"/><path class="r5yjrccli"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:lightningmoodbubble"} {...others} />);
}

export default Component;
