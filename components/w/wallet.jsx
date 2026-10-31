import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/r/rtnahcbdq.css';
import '../../css/q/qh77lz7cz.css';
import '../../css/x/xxq37biwq.css';
import '../../css/x/xdkvqhb4x.css';
import '../../css/q/qies35rxk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="rtnahcbdq wm-shadow"/><path class="qh77lz7cz wm-shadow"/><path class="xxq37biwq"/><path class="xdkvqhb4x"/><path class="qies35rxk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:wallet"} {...others} />);
}

export default Component;
