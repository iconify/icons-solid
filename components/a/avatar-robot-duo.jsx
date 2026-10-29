import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/i/i2zus_b7k.css';
import '../../css/y/ym57jdbsu.css';
import '../../css/s/s9ub5zbip.css';
import '../../css/u/umz1zqvzv.css';
import '../../css/m/mm-nrmako.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="i2zus_b7k"/><path class="wm-a ym57jdbsu"/><path class="s9ub5zbip wm-a"/><path class="umz1zqvzv"/><path class="mm-nrmako wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:avatar-robot-duo"} {...others} />);
}

export default Component;
