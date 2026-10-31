import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/d/d2kju4cpp.css';
import '../../css/t/thamkpbss.css';
import '../../css/k/klofeg8-w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="d2kju4cpp wm-shadow"/><path class="thamkpbss wm-shadow"/><path class="klofeg8-w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:chart-candlestick"} {...others} />);
}

export default Component;
