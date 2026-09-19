import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/q/qe0g46bxg.css';
import '../../css/m/m2bjnnb2a.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="qe0g46bxg"/><path class="m2bjnnb2a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:phone-call"} {...others} />);
}

export default Component;
