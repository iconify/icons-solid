import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yvy-1ccnl.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="yvy-1ccnl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:four-square-court"} {...others} />);
}

export default Component;
