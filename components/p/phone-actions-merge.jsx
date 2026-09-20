import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b06rkq0uc.css';
import '../../css/w/we3115bsg.css';
import '../../css/w/w4_i_ibjh.css';
import '../../css/u/uzb0msblh.css';
import '../../css/d/dq77omg0v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="b06rkq0uc"/><path class="we3115bsg"/><path class="w4_i_ibjh"/><path class="uzb0msblh"/><path class="dq77omg0v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:phone-actions-merge"} {...others} />);
}

export default Component;
