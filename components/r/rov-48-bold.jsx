import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oatcgvais.css';
import '../../css/l/lm_vypbga.css';
import '../../css/q/q61qoubtu.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="oatcgvais"/><path class="lm_vypbga"/><path class="q61qoubtu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:rov-48-bold"} {...others} />);
}

export default Component;
