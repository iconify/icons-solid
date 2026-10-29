import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/c/cn2v9_bei.css';
import '../../css/f/f1o7adbih.css';
import '../../css/y/y2ih3rbsr.css';
import '../../css/a/aqkf81bgs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="cn2v9_bei"/><path class="f1o7adbih wm-s"/><path class="wm-k y2ih3rbsr"/><path class="aqkf81bgs wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:phone-call-sketch"} {...others} />);
}

export default Component;
