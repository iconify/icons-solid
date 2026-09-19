import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/q/q7nwfvbkq.css';
import '../../css/u/uw08wtbph.css';
import '../../css/g/geuvczi2n.css';
import '../../css/k/kprf1gbof.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="q7nwfvbkq"/><path class="uw08wtbph"/><path class="geuvczi2n"/><path class="kprf1gbof"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:handheld"} {...others} />);
}

export default Component;
