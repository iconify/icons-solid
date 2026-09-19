import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/l/ljl6vmb9x.css';
import '../../css/k/ki3shfdfu.css';
import '../../css/p/p1-w_lbvt.css';
import '../../css/x/xm56qfbnf.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="ljl6vmb9x"/><path class="ki3shfdfu"/><path class="p1-w_lbvt"/><path class="xm56qfbnf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:send-email"} {...others} />);
}

export default Component;
