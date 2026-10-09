import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pyerhcb6s.css';
import '../../css/i/iyxqukgcr.css';
import '../../css/s/siwrc_b-z.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="pyerhcb6s"/><path class="iyxqukgcr"/><path class="siwrc_b-z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:motion-sensor-48"} {...others} />);
}

export default Component;
