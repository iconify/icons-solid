import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/i/i2ingpocw.css';
import '../../css/g/gtaltlbpz.css';
import '../../css/t/tsb2oy94r.css';
import '../../css/q/qjtlu2boe.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="i2ingpocw wm-shadow"/><path class="gtaltlbpz wm-shadow"/><path class="tsb2oy94r"/><path class="qjtlu2boe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:bauble"} {...others} />);
}

export default Component;
