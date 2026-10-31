import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l861pkbea.css';
import '../../css/t/tvjwpgbps.css';
import '../../css/r/rrchmn0ev.css';
import '../../css/i/i0zsydbyf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="l861pkbea wm-k"/><path class="tvjwpgbps wm-deco"/><path class="rrchmn0ev wm-k"/><path class="i0zsydbyf wm-shadow"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-valentine:zap"} {...others} />);
}

export default Component;
