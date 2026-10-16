import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ihmii9b0s.css';
import '../../css/d/d1uvu5qok.css';
import '../../css/p/p7ykb5bhn.css';
import '../../css/h/h7u592kmh.css';
import '../../css/i/imgtsabmm.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ihmii9b0s"/><path class="d1uvu5qok"/><path class="p7ykb5bhn"/><path class="h7u592kmh"/><path class="imgtsabmm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:gas-cylinders-48-bold"} {...others} />);
}

export default Component;
