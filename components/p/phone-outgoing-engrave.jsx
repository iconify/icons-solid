import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/o/o3jg7nbdr.css';
import '../../css/v/vhq7hmbdn.css';
import '../../css/q/qsg1dubrj.css';
import '../../css/n/n8ihr8b9o.css';
import '../../css/c/c8st50gyo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="o3jg7nbdr wm-k"/><path class="vhq7hmbdn wm-s"/><path class="qsg1dubrj wm-shadow"/><path class="n8ihr8b9o wm-k"/><path class="c8st50gyo wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:phone-outgoing-engrave"} {...others} />);
}

export default Component;
