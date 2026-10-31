import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/y/ymsf7p9bg.css';
import '../../css/w/w4gucabsy.css';
import '../../css/o/ovwmwdbbu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="wm-k ymsf7p9bg"/><path class="w4gucabsy wm-a"/><path class="ovwmwdbbu wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:party-popper-gloss"} {...others} />);
}

export default Component;
