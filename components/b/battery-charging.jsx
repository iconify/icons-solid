import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/y/yds90oc7g.css';
import '../../css/l/la4hwkjrh.css';
import '../../css/u/uuyh00o3a.css';
import '../../css/b/bt5tz1b5o.css';
import '../../css/w/wipjz_lwy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="wm-shadow yds90oc7g"/><path class="la4hwkjrh"/><path class="uuyh00o3a"/><path class="bt5tz1b5o"/><path class="wipjz_lwy wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:battery-charging"} {...others} />);
}

export default Component;
