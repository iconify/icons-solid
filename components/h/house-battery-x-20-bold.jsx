import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nqc4kqwcp.css';
import '../../css/c/cx_r_q9xv.css';
import '../../css/z/zhgbw2bsy.css';
import '../../css/x/xak2o0bmu.css';
import '../../css/k/k6sa60boh.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="nqc4kqwcp"/><path class="cx_r_q9xv"/><path class="zhgbw2bsy"/><path class="xak2o0bmu"/><path class="k6sa60boh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:house-battery-x-20-bold"} {...others} />);
}

export default Component;
