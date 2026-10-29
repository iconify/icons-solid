import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/j/jbeiewgbz.css';
import '../../css/o/ogu_r4rwb.css';
import '../../css/q/qntre5byd.css';
import '../../css/y/yb05owbgu.css';
import '../../css/g/g0hitnb-s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="jbeiewgbz"/><path class="ogu_r4rwb wm-k"/><path class="qntre5byd wm-a"/><path class="wm-k yb05owbgu"/><path class="g0hitnb-s wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:trees-sketch"} {...others} />);
}

export default Component;
