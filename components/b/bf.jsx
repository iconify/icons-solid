import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r3o29sbqk.css';
import '../../css/e/e0p7_drmn.css';
import '../../css/i/ijsusebaa.css';

const viewBox = {"width":301,"height":201};
const content = `<g class="ft5dv1b6b"><path class="r3o29sbqk"/><path class="e0p7_drmn"/><path class="ijsusebaa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cif:bf"} {...others} />);
}

export default Component;
