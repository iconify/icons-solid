import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cehi_ab5l.css';
import '../../css/l/lp3-t_bhn.css';
import '../../css/p/phjpdo02s.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="cehi_ab5l"/><path class="lp3-t_bhn"/><path class="phjpdo02s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:strategy-48"} {...others} />);
}

export default Component;
