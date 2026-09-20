import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/k/kvmqvu8hq.css';
import '../../css/i/i5aoztm3p.css';
import '../../css/p/pgeax7lhd.css';
import '../../css/c/cq-f-xmyl.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="kvmqvu8hq"/><path class="i5aoztm3p"/><path class="pgeax7lhd"/><path class="cq-f-xmyl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:beer-pitch"} {...others} />);
}

export default Component;
