import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nqc4kqwcp.css';
import '../../css/c/cx_r_q9xv.css';
import '../../css/z/zhgbw2bsy.css';
import '../../css/z/zhdahkb4h.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="nqc4kqwcp"/><path class="cx_r_q9xv"/><path class="zhgbw2bsy"/><path class="zhdahkb4h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:house-battery-check-20-bold"} {...others} />);
}

export default Component;
