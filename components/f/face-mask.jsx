import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/g/g9zgveboe.css';
import '../../css/e/eteor54oq.css';
import '../../css/f/fb3a44jcd.css';
import '../../css/p/pcs-545kw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="g9zgveboe wm-shadow"/><path class="eteor54oq"/><path class="fb3a44jcd"/><path class="pcs-545kw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:face-mask"} {...others} />);
}

export default Component;
