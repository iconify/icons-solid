import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wyk8rpbfi.css';
import '../../css/e/esm6lcbck.css';
import '../../css/r/rl8odprdk.css';
import '../../css/v/vx7vdrusn.css';
import '../../css/m/m2qx7sbjr.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="wyk8rpbfi"/><path class="esm6lcbck"/><path class="rl8odprdk"/><path class="vx7vdrusn"/><path class="m2qx7sbjr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:microsoft-excel-dark"} {...others} />);
}

export default Component;
