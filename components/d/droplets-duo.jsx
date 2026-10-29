import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/m/mv82wccyp.css';
import '../../css/f/f72f_rjii.css';
import '../../css/u/urb3kpbld.css';
import '../../css/i/idk2wtbbi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="mv82wccyp"/><path class="f72f_rjii wm-a"/><path class="urb3kpbld"/><path class="idk2wtbbi wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:droplets-duo"} {...others} />);
}

export default Component;
