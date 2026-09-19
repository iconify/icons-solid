import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/p/p8noaabtb.css';
import '../../css/x/xfkr8aboy.css';
import '../../css/m/m247a-91k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="p8noaabtb"/><path class="xfkr8aboy"/><path class="m247a-91k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:dress-07"} {...others} />);
}

export default Component;
