import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/q/q9thrpajc.css';
import '../../css/t/t-it26izg.css';
import '../../css/q/q3w-2jpjr.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="q9thrpajc"/><path class="t-it26izg"/><path class="q3w-2jpjr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:local"} {...others} />);
}

export default Component;
