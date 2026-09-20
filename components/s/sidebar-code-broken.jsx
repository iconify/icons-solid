import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/m/ml0cb1b5h.css';
import '../../css/y/y3q129yby.css';
import '../../css/m/mblpvrk8u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="ml0cb1b5h"/><path class="y3q129yby"/><path class="mblpvrk8u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:sidebar-code-broken"} {...others} />);
}

export default Component;
