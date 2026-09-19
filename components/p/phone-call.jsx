import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/q/qe0g46bxg.css';
import '../../css/t/t9kgovaqx.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="qe0g46bxg"/><path class="t9kgovaqx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:phone-call"} {...others} />);
}

export default Component;
