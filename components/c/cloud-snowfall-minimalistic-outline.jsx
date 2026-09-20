import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pdzz5drvs.css';
import '../../css/q/qkv_jnvrp.css';
import '../../css/t/tz5xo4bcd.css';
import '../../css/o/ofb7nkkeq.css';
import '../../css/y/ye6kyi_5r.css';
import '../../css/v/v5hq9elwv.css';
import '../../css/e/ebjnqs4rr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="pdzz5drvs"/><path class="qkv_jnvrp"/><path class="tz5xo4bcd"/><path class="ofb7nkkeq"/><path class="ye6kyi_5r"/><path class="v5hq9elwv"/><path clip-rule="evenodd" class="ebjnqs4rr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:cloud-snowfall-minimalistic-outline"} {...others} />);
}

export default Component;
