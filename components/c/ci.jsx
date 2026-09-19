import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c7wa49b_l.css';
import '../../css/q/q6hlonbtn.css';
import '../../css/p/p_tds7bue.css';

const viewBox = {"width":301,"height":201};
const content = `<g class="ft5dv1b6b"><path class="c7wa49b_l"/><path class="q6hlonbtn"/><path class="p_tds7bue"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cif:ci"} {...others} />);
}

export default Component;
