import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/y/y43krxvce.css';
import '../../css/h/ht6mdpbgs.css';
import '../../css/z/z6-z9cnxa.css';
import '../../css/r/rwqv--bmo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="y43krxvce"/><path class="ht6mdpbgs"/><path class="z6-z9cnxa"/><path class="rwqv--bmo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:cup-hot-broken"} {...others} />);
}

export default Component;
