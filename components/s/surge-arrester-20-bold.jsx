import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nnyhe2b8p.css';
import '../../css/p/p6jgddt-c.css';
import '../../css/q/qkdmk_b2j.css';
import '../../css/t/tc3h9blnl.css';
import '../../css/z/zu19_yban.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="nnyhe2b8p"/><path class="p6jgddt-c"/><path class="qkdmk_b2j"/><path class="tc3h9blnl"/><path class="zu19_yban"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:surge-arrester-20-bold"} {...others} />);
}

export default Component;
