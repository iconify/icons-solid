import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lyzks5_zi.css';
import '../../css/a/am6js3l0a.css';
import '../../css/l/lxo1cx_dt.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="lyzks5_zi"/><path class="am6js3l0a"/><path class="lxo1cx_dt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:buoy-20-bold"} {...others} />);
}

export default Component;
