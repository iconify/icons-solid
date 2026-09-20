import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h6fcupb1e.css';
import '../../css/j/jvk9mlbrr.css';
import '../../css/l/lsoklwbkn.css';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dpef8xb8m.css';
import '../../css/f/feyasvjtp.css';
import '../../css/h/h7krc2bmf.css';
import '../../css/u/u2b-ccpsd.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="h6fcupb1e"/><path class="jvk9mlbrr"/><rect transform="rotate(-30)" class="lsoklwbkn"/><g><g class="ft5dv1b6b"><path class="dpef8xb8m"/><path class="feyasvjtp"/><rect transform="rotate(-30.014) skewX(-.028)" class="h7krc2bmf"/><path class="u2b-ccpsd"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:axe2"} {...others} />);
}

export default Component;
