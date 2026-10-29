import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/n/nsj6ylquj.css';
import '../../css/w/wg5tz-s1o.css';
import '../../css/a/a31ecn6xc.css';
import '../../css/p/p2lfr2uwh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="nsj6ylquj"/><path class="wg5tz-s1o wm-k"/><path class="a31ecn6xc wm-k"/><path class="p2lfr2uwh wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:user-minus-sketch"} {...others} />);
}

export default Component;
