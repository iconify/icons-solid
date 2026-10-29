import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/a/a-e_bv5nu.css';
import '../../css/f/fjsiq_5yd.css';
import '../../css/y/y3j3vjb4e.css';
import '../../css/w/wonc8ubbz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="a-e_bv5nu"/><path class="fjsiq_5yd wm-a"/><path class="y3j3vjb4e"/><path class="wm-a wonc8ubbz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:briefcase-medical-duo"} {...others} />);
}

export default Component;
