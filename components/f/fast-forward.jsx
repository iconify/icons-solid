import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/y/yt1cz2byh.css';
import '../../css/l/lq39jlbzt.css';
import '../../css/q/qn3hhe_6n.css';
import '../../css/v/vl9i0ibpc.css';
import '../../css/v/vwapwaboa.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="wm-shadow yt1cz2byh"/><path class="lq39jlbzt wm-shadow"/><path class="qn3hhe_6n"/><path class="vl9i0ibpc"/><path class="vwapwaboa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:fast-forward"} {...others} />);
}

export default Component;
