import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/v/vmagrtgce.css';
import '../../css/a/apon_531b.css';
import '../../css/a/an1oj5iwf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="vmagrtgce"/><path class="apon_531b"/><path class="an1oj5iwf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:mail-account-01"} {...others} />);
}

export default Component;
