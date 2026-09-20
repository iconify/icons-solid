import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/x/xs3pxobcu.css';
import '../../css/j/j3gq6tqze.css';
import '../../css/d/deivui2dq.css';
import '../../css/x/xhkm7y-hu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="xs3pxobcu"/><path class="j3gq6tqze"/><path class="deivui2dq"/><path class="xhkm7y-hu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:calculator-broken"} {...others} />);
}

export default Component;
