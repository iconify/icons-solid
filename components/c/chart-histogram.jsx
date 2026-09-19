import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/g/g_12-kblq.css';
import '../../css/y/ype_babxd.css';
import '../../css/i/ihxph8b_f.css';
import '../../css/b/b5ql37bfq.css';
import '../../css/c/cpuba4h2g.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="g_12-kblq"/><path class="ype_babxd"/><path class="ihxph8b_f"/><path class="b5ql37bfq"/><path class="cpuba4h2g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:chart-histogram"} {...others} />);
}

export default Component;
