import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/t/t8lnxgces.css';
import '../../css/n/n6762lb_a.css';
import '../../css/k/kfdh64trl.css';
import '../../css/d/dc83f5wdc.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><path class="t8lnxgces"/><path class="n6762lb_a"/><path class="kfdh64trl"/><path class="dc83f5wdc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:baggage-delay"} {...others} />);
}

export default Component;
