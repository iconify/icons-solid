import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pcwfyf16x.css';
import '../../css/s/s5tz5x6dr.css';
import '../../css/u/ueeyhi2_o.css';
import '../../css/g/gwc7-sbdf.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="pcwfyf16x"/><path class="s5tz5x6dr"/><path class="ueeyhi2_o"/><path class="gwc7-sbdf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:trash-48-bold"} {...others} />);
}

export default Component;
