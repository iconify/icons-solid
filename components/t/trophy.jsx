import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/g/go-79r-pz.css';
import '../../css/p/p982fkb3t.css';
import '../../css/m/m2_7h1zcn.css';
import '../../css/s/sm9mazbxy.css';
import '../../css/q/qluli75qf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="go-79r-pz wm-shadow"/><path class="p982fkb3t"/><path class="m2_7h1zcn"/><path class="sm9mazbxy"/><path class="qluli75qf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:trophy"} {...others} />);
}

export default Component;
