import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/codjm1acu.css';
import '../../css/v/v6t7zyvwm.css';
import '../../css/v/v_38qbcus.css';
import '../../css/r/rd2ry_ken.css';
import '../../css/a/atoblbbfx.css';
import '../../css/m/m3g5-9b2e.css';
import '../../css/u/uvzspyp2v.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="codjm1acu"/><path class="v6t7zyvwm"/><path class="v_38qbcus"/><path class="rd2ry_ken"/><path class="atoblbbfx"/><path class="m3g5-9b2e"/><path class="uvzspyp2v"/><g><path class="qy525jbwx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:flag-runion"} {...others} />);
}

export default Component;
