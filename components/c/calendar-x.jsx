import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/c/cf7nx1v6t.css';
import '../../css/m/m6joo21nb.css';
import '../../css/o/oxu7ssb6t.css';
import '../../css/r/rpwsk1b3a.css';
import '../../css/v/v5ok5cbpt.css';
import '../../css/b/blqnr7muq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="cf7nx1v6t wm-shadow"/><path class="m6joo21nb"/><path class="oxu7ssb6t"/><path class="rpwsk1b3a"/><path class="v5ok5cbpt"/><path class="blqnr7muq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:calendar-x"} {...others} />);
}

export default Component;
