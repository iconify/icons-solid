import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n7zhc8mgl.css';
import '../../css/r/r6sk4cbzq.css';
import '../../css/w/w-gk8o20v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="n7zhc8mgl"/><path class="r6sk4cbzq"/><path class="w-gk8o20v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:currency-eth"} {...others} />);
}

export default Component;
