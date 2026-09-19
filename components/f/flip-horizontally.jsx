import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/w/wsbzt7bwh.css';
import '../../css/w/ws4_uh05r.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="wsbzt7bwh"/><path class="ws4_uh05r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:flip-horizontally"} {...others} />);
}

export default Component;
