import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/f/fdttvf2ha.css';
import '../../css/y/yxdkshbqq.css';
import '../../css/y/ybii7cbeu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="fdttvf2ha wm-k"/><path class="yxdkshbqq"/><path class="wm-s ybii7cbeu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:flashlight"} {...others} />);
}

export default Component;
