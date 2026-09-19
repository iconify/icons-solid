import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/ltaxr799h.css';
import '../../css/d/dnv6m0b-s.css';
import '../../css/i/id2naacgj.css';
import '../../css/s/sbfhiccjv.css';
import '../../css/b/beutz49kd.css';
import '../../css/w/wb8f6ebds.css';
import '../../css/r/radv86ktc.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ltaxr799h"/><path class="dnv6m0b-s"/><path class="id2naacgj"/><path class="sbfhiccjv"/><path class="beutz49kd"/><path class="wb8f6ebds"/><path class="radv86ktc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:rolledupnewspaper"} {...others} />);
}

export default Component;
