import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/a/axw7lr55v.css';
import '../../css/p/p1lghbcur.css';
import '../../css/q/qy_wc_bod.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><rect class="axw7lr55v"/><path class="p1lghbcur"/><path class="qy_wc_bod"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:massage-chair"} {...others} />);
}

export default Component;
