import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/g/gzjffcpzq.css';
import '../../css/r/rwh3knbhs.css';
import '../../css/p/p81j7dbae.css';
import '../../css/x/xck8kdj3v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="gzjffcpzq wm-k"/><path class="rwh3knbhs wm-shadow"/><path class="p81j7dbae wm-k"/><path class="wm-a xck8kdj3v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:chess-engrave"} {...others} />);
}

export default Component;
