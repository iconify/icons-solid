import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fl6rzhb0i.css';
import '../../css/f/f2e39r65u.css';
import '../../css/s/stpa1khhn.css';
import '../../css/c/cv6oon_iy.css';
import '../../css/e/e4h-71bkh.css';
import '../../css/l/l02zxab4o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="fl6rzhb0i wm-k"/><path class="f2e39r65u wm-k"/><path class="stpa1khhn wm-k"/><path class="cv6oon_iy wm-k"/><path class="e4h-71bkh wm-shine"/><path class="l02zxab4o wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:message-square-plus"} {...others} />);
}

export default Component;
