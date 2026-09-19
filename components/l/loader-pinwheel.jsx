import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/m/m4l-9ybuj.css';
import '../../css/g/gnng3obxz.css';
import '../../css/p/pzze8cbzr.css';
import '../../css/u/ue5su15bf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><circle class="m4l-9ybuj"/><path class="gnng3obxz"/><path class="pzze8cbzr"/><path class="ue5su15bf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:loader-pinwheel"} {...others} />);
}

export default Component;
