import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/h/h04q6jbwu.css';
import '../../css/m/mxc394bgs.css';
import '../../css/y/yeh6x5bvv.css';
import '../../css/n/n65i2cfkw.css';
import '../../css/c/c9mwe-beg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="h04q6jbwu"/><path class="mxc394bgs wm-s"/><path class="wm-s yeh6x5bvv"/><path class="n65i2cfkw"/><path class="c9mwe-beg wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:paint-bucket-duo"} {...others} />);
}

export default Component;
