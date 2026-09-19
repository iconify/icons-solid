import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/r36xumn7l.css';
import '../../css/w/wjbd8mreq.css';
import '../../css/g/ga8bzm_gf.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="r36xumn7l"/><path class="wjbd8mreq"/><path class="ga8bzm_gf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:yawning-face"} {...others} />);
}

export default Component;
