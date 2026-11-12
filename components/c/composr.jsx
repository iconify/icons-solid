import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n_934gbdn.css';
import '../../css/f/f_r188jlf.css';
import '../../css/p/pq9c81bfr.css';

const viewBox = {"width":512,"height":512};
const content = `<linearGradient id="SVGI80CbchV" x1="19.2" x2="492.8" y1="256" y2="256" gradientUnits="userSpaceOnUse"><stop offset="0" class="n_934gbdn"/><stop offset="1" class="f_r188jlf"/></linearGradient><path fill="url(#SVGI80CbchV)" class="pq9c81bfr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:composr"} {...others} />);
}

export default Component;
