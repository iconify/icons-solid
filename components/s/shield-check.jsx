import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/e/ecl9mibod.css';
import '../../css/f/fcmz1-b-y.css';
import '../../css/h/hvcwt4csp.css';
import '../../css/u/uo13m8l0e.css';
import '../../css/d/d4bhjep9t.css';
import '../../css/u/ulebcca_t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="ecl9mibod wm-shadow"/><path class="fcmz1-b-y"/><path class="hvcwt4csp"/><path class="uo13m8l0e"/><path class="d4bhjep9t"/><path class="ulebcca_t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:shield-check"} {...others} />);
}

export default Component;
