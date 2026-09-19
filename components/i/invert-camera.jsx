import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/r/r-jxe9bpv.css';
import '../../css/g/gxztbyc_q.css';
import '../../css/z/zjbgnh96p.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="r-jxe9bpv"/><path class="gxztbyc_q"/><path class="zjbgnh96p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:invert-camera"} {...others} />);
}

export default Component;
