import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/q/qmykw592j.css';
import '../../css/w/wkab_zovm.css';
import '../../css/y/yn_m8clgw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="qmykw592j"/><path class="wkab_zovm"/><path class="wm-s yn_m8clgw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:heading-2"} {...others} />);
}

export default Component;
