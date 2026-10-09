import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yz9qrsbef.css';
import '../../css/b/bsrrsx78k.css';
import '../../css/t/tm2j37b_o.css';
import '../../css/t/te0eh-jxh.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="yz9qrsbef"/><path class="bsrrsx78k"/><path class="tm2j37b_o"/><path class="te0eh-jxh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:hydro-turbine-20"} {...others} />);
}

export default Component;
