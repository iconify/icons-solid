import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/l/l27uvzhmn.css';
import '../../css/g/gdtg0abfx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="l27uvzhmn"/><path class="gdtg0abfx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:video-replay"} {...others} />);
}

export default Component;
