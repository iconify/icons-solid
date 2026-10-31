import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/s/sckqad0ff.css';
import '../../css/v/v-st8lanl.css';
import '../../css/j/js10n058p.css';
import '../../css/e/ey_b5rb0u.css';
import '../../css/a/a6f4mz_ky.css';
import '../../css/h/h8sx8htxe.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="sckqad0ff wm-shadow"/><path class="v-st8lanl"/><path class="js10n058p"/><path class="ey_b5rb0u"/><path class="a6f4mz_ky"/><path class="h8sx8htxe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:moon"} {...others} />);
}

export default Component;
