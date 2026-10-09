import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ybysmhbdr.css';
import '../../css/u/un3d4_cir.css';
import '../../css/z/z2j4_3b3x.css';
import '../../css/i/iyzh_ybqf.css';
import '../../css/h/hw-gycbzb.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ybysmhbdr"/><path class="un3d4_cir"/><path class="z2j4_3b3x"/><path class="iyzh_ybqf"/><path class="hw-gycbzb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:chart-radar-20-bold"} {...others} />);
}

export default Component;
