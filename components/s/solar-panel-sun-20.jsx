import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vvmutbc5a.css';
import '../../css/f/fift-7btu.css';
import '../../css/t/t40xb7btq.css';
import '../../css/s/scfermb5u.css';
import '../../css/v/vkqm4g6bs.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="vvmutbc5a"/><path class="fift-7btu"/><path class="t40xb7btq"/><path class="scfermb5u"/><path class="vkqm4g6bs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:solar-panel-sun-20"} {...others} />);
}

export default Component;
