import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/x/x_40g0bsd.css';
import '../../css/d/dqwdwccpd.css';
import '../../css/b/bgbpmbbgd.css';
import '../../css/l/lju02ub1h.css';
import '../../css/c/c7prk3bsq.css';
import '../../css/q/qd34tbbpz.css';
import '../../css/l/lixh7gb0y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="x_40g0bsd"/><path class="dqwdwccpd wm-k"/><path class="bgbpmbbgd wm-k"/><path class="lju02ub1h wm-a"/><path class="c7prk3bsq wm-a"/><path class="qd34tbbpz wm-s"/><path class="lixh7gb0y wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:database-zap-sketch"} {...others} />);
}

export default Component;
