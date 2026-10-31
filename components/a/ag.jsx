import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/erm2vobey.css';
import '../../css/q/qa4oufrqb.css';
import '../../css/i/i7uq_l8ee.css';
import '../../css/s/shf2iebpr.css';
import '../../css/r/rezjkuybc.css';

const viewBox = {"width":301,"height":201};
const content = `<g class="ft5dv1b6b"><path class="erm2vobey"/><path class="qa4oufrqb"/><path class="i7uq_l8ee"/><path class="shf2iebpr"/><path class="rezjkuybc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cif:ag"} {...others} />);
}

export default Component;
