import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/w/w51c1j92o.css';
import '../../css/f/f460cp0ja.css';
import '../../css/o/o21xwxcop.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="w51c1j92o wm-a"/><path class="f460cp0ja wm-k"/><path class="o21xwxcop wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:tv-sketch"} {...others} />);
}

export default Component;
