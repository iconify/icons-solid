import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k_60udxbz.css';
import '../../css/d/dpwi3bccu.css';
import '../../css/p/p7kyn66pi.css';
import '../../css/i/ib8r12brx.css';
import '../../css/b/bxzxb8v8d.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="k_60udxbz"/><path class="dpwi3bccu"/><path class="p7kyn66pi"/><path class="ib8r12brx"/><path class="bxzxb8v8d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:ev-charger-alert-48"} {...others} />);
}

export default Component;
