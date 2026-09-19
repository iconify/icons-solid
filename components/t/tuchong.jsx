import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/j/ja8cnttar.css';
import '../../css/t/t4xl_0g8d.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="ja8cnttar"/><path class="t4xl_0g8d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:tuchong"} {...others} />);
}

export default Component;
