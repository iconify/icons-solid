import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/t/tp8cfdceb.css';
import '../../css/w/wsbzt7bwh.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="tp8cfdceb"/><path class="wsbzt7bwh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:align-horizontally"} {...others} />);
}

export default Component;
