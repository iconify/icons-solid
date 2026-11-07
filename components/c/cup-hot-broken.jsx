import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/k/k57943a-c.css';
import '../../css/h/ht6mdpbgs.css';
import '../../css/j/jengioewr.css';
import '../../css/w/wuz82_-er.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="k57943a-c"/><path class="ht6mdpbgs"/><path class="jengioewr"/><path class="wuz82_-er"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:cup-hot-broken"} {...others} />);
}

export default Component;
