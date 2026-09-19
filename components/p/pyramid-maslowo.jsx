import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/x/xqklry6dp.css';
import '../../css/i/im0erbc2j.css';
import '../../css/a/az1hpy9gr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="xqklry6dp"/><path class="im0erbc2j"/><path class="az1hpy9gr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:pyramid-maslowo"} {...others} />);
}

export default Component;
