import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h_0isqx2s.css';
import '../../css/q/qx69j2ppm.css';
import '../../css/p/p10a-2b7f.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="h_0isqx2s"/><path class="qx69j2ppm"/><path class="p10a-2b7f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:geyser-20-bold"} {...others} />);
}

export default Component;
