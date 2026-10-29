import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/ti_jfux6z.css';
import '../../css/e/ey7bf82-d.css';
import '../../css/g/g7fazab9l.css';
import '../../css/f/f-01c3r0a.css';
import '../../css/i/ihsfxabub.css';
import '../../css/c/c7mrnyb3n.css';
import '../../css/t/t5psxe-3e.css';
import '../../css/m/mi4ln721a.css';
import '../../css/g/gjor-tbiq.css';
import '../../css/d/djyhm652c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ti_jfux6z wm-k"/><path class="ey7bf82-d wm-k"/><path class="g7fazab9l wm-k"/><path class="f-01c3r0a wm-shine"/><path class="ihsfxabub wm-a"/><path class="c7mrnyb3n wm-s"/><path class="t5psxe-3e wm-s"/><path class="mi4ln721a wm-s"/><path class="gjor-tbiq wm-shine"/><path class="djyhm652c wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:brain-cog"} {...others} />);
}

export default Component;
