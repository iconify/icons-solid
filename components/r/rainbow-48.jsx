import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qpwbxtx3s.css';
import '../../css/t/t_784wbmv.css';
import '../../css/w/wnrp6nv_g.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="qpwbxtx3s"/><path class="t_784wbmv"/><path class="wnrp6nv_g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:rainbow-48"} {...others} />);
}

export default Component;
