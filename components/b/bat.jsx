import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/t/ttrhctg_h.css';
import '../../css/a/aqpidbcvq.css';
import '../../css/x/x8-uv88zv.css';
import '../../css/e/ep538wbdl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="ttrhctg_h wm-shadow"/><path class="aqpidbcvq"/><path class="x8-uv88zv"/><path class="ep538wbdl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:bat"} {...others} />);
}

export default Component;
