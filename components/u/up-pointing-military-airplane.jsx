import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/utl7egypz.css';
import '../../css/t/to5knupti.css';
import '../../css/m/mhlhscthb.css';
import '../../css/d/dpxs1sbzm.css';
import '../../css/l/l02wzmbeb.css';
import '../../css/m/m74xmac5r.css';
import '../../css/x/xaufmbs_i.css';
import '../../css/j/j7qbgkbve.css';
import '../../css/m/mkmej1b3j.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="utl7egypz"/><path class="to5knupti"/><path class="mhlhscthb"/><path class="dpxs1sbzm"/><path class="l02wzmbeb"/><g class="m74xmac5r"><path class="xaufmbs_i"/><path class="j7qbgkbve"/><path class="mkmej1b3j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:up-pointing-military-airplane"} {...others} />);
}

export default Component;
