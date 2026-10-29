import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/s/s0rv1cbpy.css';
import '../../css/o/omclqpx8b.css';
import '../../css/t/tmyu-psjc.css';
import '../../css/o/o0pwwr-ng.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="s0rv1cbpy"/><path class="omclqpx8b wm-k"/><path class="tmyu-psjc wm-k"/><path class="o0pwwr-ng wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:shield-user-sketch"} {...others} />);
}

export default Component;
