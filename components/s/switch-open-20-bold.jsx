import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t-cr1kbtc.css';
import '../../css/j/ji6lv2bxm.css';
import '../../css/a/aqsuay1um.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="t-cr1kbtc"/><path class="ji6lv2bxm"/><path class="aqsuay1um"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:switch-open-20-bold"} {...others} />);
}

export default Component;
