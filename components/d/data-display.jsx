import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/p/pv-ktibnd.css';
import '../../css/m/msgncjdxc.css';
import '../../css/b/bhyjiupcc.css';
import '../../css/t/tpzz0kkpc.css';
import '../../css/u/u9wx_q8di.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="pv-ktibnd"/><path class="msgncjdxc"/><path class="bhyjiupcc"/><path class="tpzz0kkpc"/><path class="u9wx_q8di"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:data-display"} {...others} />);
}

export default Component;
