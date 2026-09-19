import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/w/wo-9vty1n.css';
import '../../css/x/xzxsc8bqh.css';
import '../../css/t/tvpmmp2in.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="wo-9vty1n"/><path class="xzxsc8bqh"/><path class="tvpmmp2in"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:beer-mug"} {...others} />);
}

export default Component;
