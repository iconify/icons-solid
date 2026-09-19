import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/r/rttu3wbcx.css';
import '../../css/o/os6-oj5lh.css';
import '../../css/i/irg7-9mxx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="rttu3wbcx"/><path class="os6-oj5lh"/><path class="irg7-9mxx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:mail-lock-01"} {...others} />);
}

export default Component;
