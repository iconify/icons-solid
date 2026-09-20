import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i4w4xacws.css';
import '../../css/g/g481oibhd.css';
import '../../css/m/m3h9j4bgc.css';
import '../../css/w/w6s-j3bui.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="i4w4xacws"/><path class="g481oibhd"/><path class="m3h9j4bgc"/><path class="w6s-j3bui"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:flag-heart"} {...others} />);
}

export default Component;
