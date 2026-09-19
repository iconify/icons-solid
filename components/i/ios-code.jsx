import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mt5z90bty.css';
import '../../css/o/op7udfbjf.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="mt5z90bty"/><path class="op7udfbjf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:ios-code"} {...others} />);
}

export default Component;
