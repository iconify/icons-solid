import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/r/rv4ydkbqf.css';
import '../../css/q/qqhx8ebex.css';
import '../../css/h/hqnl-9uga.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="rv4ydkbqf"/><circle class="qqhx8ebex"/><path class="hqnl-9uga"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:geometric-shapes-01"} {...others} />);
}

export default Component;
