import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/k/kvrua1bbb.css';
import '../../css/c/c6t0yhbpz.css';
import '../../css/u/usfe9xhoc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="kvrua1bbb"/><path class="c6t0yhbpz"/><path class="usfe9xhoc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:notification-snooze-02"} {...others} />);
}

export default Component;
