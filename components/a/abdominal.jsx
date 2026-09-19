import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m7atdpspj.css';
import '../../css/t/tqp7o2blh.css';
import '../../css/i/ixx8uwlsa.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="m7atdpspj"/><path class="tqp7o2blh"/><path class="ixx8uwlsa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:abdominal"} {...others} />);
}

export default Component;
