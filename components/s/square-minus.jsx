import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wev7_1bhi.css';
import '../../css/y/yz-efebcs.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wev7_1bhi"/><path class="yz-efebcs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:square-minus"} {...others} />);
}

export default Component;
