import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/i/i5stmw_9d.css';
import '../../css/r/rfrelpt5b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="i5stmw_9d"/><path class="rfrelpt5b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:gears"} {...others} />);
}

export default Component;
