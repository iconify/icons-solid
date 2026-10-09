import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tpeu_j1mo.css';
import '../../css/l/lyr6s0wuk.css';
import '../../css/b/by6gobvlv.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="tpeu_j1mo"/><path class="lyr6s0wuk"/><path class="by6gobvlv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:grant-48"} {...others} />);
}

export default Component;
