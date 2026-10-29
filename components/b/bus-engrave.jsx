import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/e/ei-pymb0m.css';
import '../../css/l/ldvozjbgv.css';
import '../../css/h/hmu5dpbwc.css';
import '../../css/z/z3cb_j7ez.css';
import '../../css/q/q0z4nob4z.css';
import '../../css/i/ild3phboo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="ei-pymb0m wm-k"/><path class="ldvozjbgv wm-a"/><path class="hmu5dpbwc wm-shadow"/><path class="wm-k z3cb_j7ez"/><path class="q0z4nob4z wm-a"/><path class="ild3phboo wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:bus-engrave"} {...others} />);
}

export default Component;
