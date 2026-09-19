import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/o/odz64y1rz.css';
import '../../css/t/th_u9_g4d.css';
import '../../css/z/zsxn4jbff.css';
import '../../css/l/lm75yhbao.css';
import '../../css/m/mkjre90hj.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="odz64y1rz"/><path class="th_u9_g4d"/><path class="zsxn4jbff"/><path class="lm75yhbao"/><path class="mkjre90hj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:arithmetic"} {...others} />);
}

export default Component;
