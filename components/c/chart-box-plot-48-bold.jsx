import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tpel3hezc.css';
import '../../css/k/kii22qb0u.css';
import '../../css/b/bf_bk4tou.css';
import '../../css/z/zeg382bds.css';
import '../../css/p/pjuc1jbdi.css';
import '../../css/p/pvrcl3qql.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="tpel3hezc"/><path class="kii22qb0u"/><path class="bf_bk4tou"/><path class="zeg382bds"/><path class="pjuc1jbdi"/><path class="pvrcl3qql"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:chart-box-plot-48-bold"} {...others} />);
}

export default Component;
