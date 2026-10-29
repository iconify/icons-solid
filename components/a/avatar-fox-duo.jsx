import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/x/xc0tnob1v.css';
import '../../css/j/jxh_h4rlc.css';
import '../../css/x/x34umyuqw.css';
import '../../css/m/mr8d_cbya.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="xc0tnob1v"/><path class="jxh_h4rlc"/><path class="wm-a x34umyuqw"/><path class="mr8d_cbya"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:avatar-fox-duo"} {...others} />);
}

export default Component;
