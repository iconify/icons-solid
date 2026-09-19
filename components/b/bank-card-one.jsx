import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/t/t366rs_zx.css';
import '../../css/k/kjzre3jgv.css';
import '../../css/x/xma6_zbrt.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="t366rs_zx"/><rect class="kjzre3jgv"/><path class="xma6_zbrt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:bank-card-one"} {...others} />);
}

export default Component;
