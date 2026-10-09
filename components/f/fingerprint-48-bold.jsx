import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rl_b26bzx.css';
import '../../css/o/oewx-qbfa.css';
import '../../css/m/mzed39b7d.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="rl_b26bzx"/><path class="oewx-qbfa"/><path class="mzed39b7d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:fingerprint-48-bold"} {...others} />);
}

export default Component;
