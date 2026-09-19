import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/p/phqllkbbt.css';
import '../../css/y/yp4dgwzus.css';
import '../../css/r/rl4zu8qob.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="phqllkbbt"/><path class="yp4dgwzus"/><path class="rl4zu8qob"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:file-bitcoin"} {...others} />);
}

export default Component;
