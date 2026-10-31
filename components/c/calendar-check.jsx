import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/c/cf7nx1v6t.css';
import '../../css/m/m6joo21nb.css';
import '../../css/h/hb7rexbyy.css';
import '../../css/t/tjhd2sb4c.css';
import '../../css/n/njik0z2gu.css';
import '../../css/d/d0hst6bdl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="cf7nx1v6t wm-shadow"/><path class="m6joo21nb"/><path class="hb7rexbyy"/><path class="tjhd2sb4c"/><path class="njik0z2gu"/><path class="d0hst6bdl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:calendar-check"} {...others} />);
}

export default Component;
