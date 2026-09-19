import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/e/epk6im27b.css';
import '../../css/n/nwqrko_2p.css';
import '../../css/d/dyhpa9bzx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="epk6im27b"/><path class="nwqrko_2p"/><path class="dyhpa9bzx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:node-move-up"} {...others} />);
}

export default Component;
