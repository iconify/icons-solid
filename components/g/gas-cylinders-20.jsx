import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pycxazbfr.css';
import '../../css/i/i5mya4brk.css';
import '../../css/m/mi7_fubeb.css';
import '../../css/g/gr6o8envi.css';
import '../../css/a/aj0ockjbd.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="pycxazbfr"/><path class="i5mya4brk"/><path class="mi7_fubeb"/><path class="gr6o8envi"/><path class="aj0ockjbd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:gas-cylinders-20"} {...others} />);
}

export default Component;
