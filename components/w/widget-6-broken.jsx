import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/f/fg21p6bqy.css';
import '../../css/r/rycsq4bbm.css';
import '../../css/k/ku4eu0m6p.css';
import '../../css/q/qksz56pwd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="fg21p6bqy"/><path class="rycsq4bbm"/><path class="ku4eu0m6p"/><path class="qksz56pwd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:widget-6-broken"} {...others} />);
}

export default Component;
