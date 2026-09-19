import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/r/rhvoe86hx.css';
import '../../css/r/rcjzao2my.css';
import '../../css/l/lq34il7_c.css';
import '../../css/a/am71s8dmp.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="rhvoe86hx"/><path class="rcjzao2my"/><path class="lq34il7_c"/><path class="am71s8dmp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:tent-banner"} {...others} />);
}

export default Component;
