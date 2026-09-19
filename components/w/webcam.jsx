import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/q/qhcun_l9h.css';
import '../../css/d/d4_2msbzg.css';
import '../../css/q/q3w-2jpjr.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="qhcun_l9h"/><path class="d4_2msbzg"/><path class="q3w-2jpjr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:webcam"} {...others} />);
}

export default Component;
