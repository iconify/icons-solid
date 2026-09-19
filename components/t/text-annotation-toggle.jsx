import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p1hd5ebhz.css';
import '../../css/l/lyd-xwqcp.css';
import '../../css/n/ndnl__jzf.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="p1hd5ebhz"/><path class="lyd-xwqcp"/><path class="ndnl__jzf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:text-annotation-toggle"} {...others} />);
}

export default Component;
