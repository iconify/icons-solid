import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/r/rj21gvb7h.css';
import '../../css/r/r78wm_rop.css';
import '../../css/i/i_dmff78x.css';
import '../../css/r/ro19ge9rq.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="rj21gvb7h"/><path class="r78wm_rop"/><path class="i_dmff78x"/><path class="ro19ge9rq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:reject"} {...others} />);
}

export default Component;
