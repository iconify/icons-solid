import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vfpjugbvy.css';
import '../../css/t/tlqitc8ao.css';
import '../../css/z/zf8mcnxyj.css';
import '../../css/f/ff97exjxv.css';
import '../../css/x/xmpkb-r9i.css';
import '../../css/z/z_q1h8bqq.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="vfpjugbvy"/><path class="tlqitc8ao"/><path class="zf8mcnxyj"/><path class="ff97exjxv"/><path class="xmpkb-r9i"/><path class="z_q1h8bqq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:house-wind-48-bold"} {...others} />);
}

export default Component;
