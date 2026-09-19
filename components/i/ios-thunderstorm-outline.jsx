import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/ck9j7l_ys.css';
import '../../css/y/yu7vi3bgi.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ck9j7l_ys"/><path class="yu7vi3bgi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:ios-thunderstorm-outline"} {...others} />);
}

export default Component;
