import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/a/as714b-9n.css';
import '../../css/i/iv0tfobzy.css';
import '../../css/n/nahw1dvtt.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="as714b-9n"/><path class="iv0tfobzy"/><path class="nahw1dvtt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:game-handle"} {...others} />);
}

export default Component;
