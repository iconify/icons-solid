import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/v/vl4enfbow.css';
import '../../css/l/lsclfdccu.css';
import '../../css/y/yztepi9po.css';
import '../../css/u/utaky5bay.css';
import '../../css/k/k_8tbwcdl.css';
import '../../css/f/f78jk_b3b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="vl4enfbow wm-shadow"/><path class="lsclfdccu"/><path class="yztepi9po"/><path class="utaky5bay"/><path class="k_8tbwcdl"/><path class="f78jk_b3b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:door-open"} {...others} />);
}

export default Component;
