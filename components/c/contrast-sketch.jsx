import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/n/n0hxhlb-h.css';
import '../../css/l/l-l2pfuww.css';
import '../../css/y/y-uaqkbak.css';
import '../../css/r/rp9nrr50p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="n0hxhlb-h"/><path class="l-l2pfuww wm-a"/><path class="wm-k y-uaqkbak"/><path class="rp9nrr50p wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:contrast-sketch"} {...others} />);
}

export default Component;
