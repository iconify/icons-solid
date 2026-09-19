import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/p/ph89ajpvx.css';
import '../../css/a/a2dqemwrc.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="ph89ajpvx"/><path class="a2dqemwrc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:contrast-view"} {...others} />);
}

export default Component;
