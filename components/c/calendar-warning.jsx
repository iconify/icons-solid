import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/w/w6s_hllyq.css';
import '../../css/o/onq94rn7k.css';
import '../../css/q/quqp5gnnd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="w6s_hllyq"/><path class="onq94rn7k"/><path class="quqp5gnnd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:calendar-warning"} {...others} />);
}

export default Component;
