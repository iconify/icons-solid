import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/y/y3ujnnbol.css';
import '../../css/d/d18ai5beg.css';
import '../../css/o/ojr5lccvy.css';
import '../../css/u/urhp2vbzd.css';
import '../../css/w/wj3l2jslf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="y3ujnnbol"/><path class="d18ai5beg wm-k"/><path class="ojr5lccvy wm-a"/><path class="urhp2vbzd wm-k"/><path class="wj3l2jslf wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:mandarin-orange-sketch"} {...others} />);
}

export default Component;
