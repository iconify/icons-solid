import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/p/p8c1pj53n.css';
import '../../css/p/pa30tfbac.css';
import '../../css/i/ilthk8zbw.css';
import '../../css/y/yf1yh2b6t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="p8c1pj53n"/><path class="pa30tfbac"/><path class="ilthk8zbw"/><path class="yf1yh2b6t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:cash-payment-bills"} {...others} />);
}

export default Component;
