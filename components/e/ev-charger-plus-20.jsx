import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mp8od4m5s.css';
import '../../css/f/fixef821q.css';
import '../../css/o/o24sug9tq.css';
import '../../css/v/vwu-497ty.css';
import '../../css/r/rmh-uhtym.css';
import '../../css/a/aqj0--bjv.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="mp8od4m5s"/><path class="fixef821q"/><path class="o24sug9tq"/><path class="vwu-497ty"/><path class="rmh-uhtym"/><path class="aqj0--bjv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:ev-charger-plus-20"} {...others} />);
}

export default Component;
