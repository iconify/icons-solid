import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dajoi4szi.css';
import '../../css/i/i8ffy_b0e.css';
import '../../css/h/hw9e_bbpw.css';
import '../../css/e/edln79b4d.css';

const viewBox = {"width":301,"height":201};
const content = `<g class="ft5dv1b6b"><path class="dajoi4szi"/><path class="i8ffy_b0e"/><path class="hw9e_bbpw"/><path class="edln79b4d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cif:sn"} {...others} />);
}

export default Component;
