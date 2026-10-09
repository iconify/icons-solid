import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lq4guz5es.css';
import '../../css/q/qyahs8kgl.css';
import '../../css/q/qpl33vbpy.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="lq4guz5es"/><path class="qyahs8kgl"/><path class="qpl33vbpy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:belt-drive-20-bold"} {...others} />);
}

export default Component;
