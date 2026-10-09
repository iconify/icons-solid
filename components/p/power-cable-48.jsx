import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/ln0_z3bkf.css';
import '../../css/f/fg9x0cckk.css';
import '../../css/z/z8mmwq-ti.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ln0_z3bkf"/><path class="fg9x0cckk"/><path class="z8mmwq-ti"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:power-cable-48"} {...others} />);
}

export default Component;
