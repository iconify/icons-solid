import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/p/psncwcctr.css';
import '../../css/o/oqjd98bgp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="psncwcctr"/><path class="oqjd98bgp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:bubble-chat-favourite"} {...others} />);
}

export default Component;
