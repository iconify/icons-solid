import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lscp_lbsk.css';
import '../../css/e/euqlsybkd.css';
import '../../css/t/tliwn4baj.css';
import '../../css/y/yxnumh36j.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="lscp_lbsk"/><path class="euqlsybkd"/><path class="tliwn4baj"/><path class="yxnumh36j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:energy-flow-48"} {...others} />);
}

export default Component;
