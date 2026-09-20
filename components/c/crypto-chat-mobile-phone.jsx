import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/c/cavew1bts.css';
import '../../css/i/icecplbee.css';
import '../../css/h/hn0-6lmiz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="cavew1bts"/><path class="icecplbee"/><path class="hn0-6lmiz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:crypto-chat-mobile-phone"} {...others} />);
}

export default Component;
