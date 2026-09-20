import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/k/k_c0g5bnd.css';
import '../../css/s/sgmeyhlej.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="k_c0g5bnd"/><path class="sgmeyhlej"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:cleaning-room-woman"} {...others} />);
}

export default Component;
