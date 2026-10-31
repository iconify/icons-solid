import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/z/z1j7k2dhf.css';
import '../../css/r/rhctu04pv.css';
import '../../css/d/dbcwgdbor.css';
import '../../css/h/hwvxncbyx.css';
import '../../css/r/rze47ib2l.css';
import '../../css/r/r0d-q6u0t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="wm-shadow z1j7k2dhf"/><path class="rhctu04pv"/><path class="dbcwgdbor"/><path class="hwvxncbyx"/><path class="rze47ib2l"/><path class="r0d-q6u0t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:info-circle"} {...others} />);
}

export default Component;
