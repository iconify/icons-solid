import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/u/ur79r5g2j.css';
import '../../css/x/x4d99ub-t.css';
import '../../css/w/w11yo8viv.css';
import '../../css/y/ymjuf863o.css';
import '../../css/p/p76-_gbtv.css';
import '../../css/v/v-sazx1qx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="ur79r5g2j wm-shadow"/><path class="x4d99ub-t"/><path class="w11yo8viv"/><path class="ymjuf863o"/><path class="p76-_gbtv"/><path class="v-sazx1qx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:save"} {...others} />);
}

export default Component;
