import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/x/xuuig3bfw.css';
import '../../css/m/mjv0wacus.css';
import '../../css/q/qlniz9tvc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="xuuig3bfw"/><path class="mjv0wacus"/><path class="qlniz9tvc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:nintendo-switch"} {...others} />);
}

export default Component;
