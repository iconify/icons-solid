import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/l/lf83cxb8z.css';
import '../../css/s/swjikrb0b.css';
import '../../css/v/v3-6hlbyl.css';
import '../../css/a/as81pf7bf.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="lf83cxb8z"/><path class="swjikrb0b"/><path class="v3-6hlbyl"/><path class="as81pf7bf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:hourglass-full"} {...others} />);
}

export default Component;
