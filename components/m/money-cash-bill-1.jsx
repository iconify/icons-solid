import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/p/p2au79bps.css';
import '../../css/q/qple_7fyi.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="p2au79bps"/><path class="qple_7fyi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:money-cash-bill-1"} {...others} />);
}

export default Component;
