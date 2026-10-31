import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/e/eblnupbhs.css';
import '../../css/j/jdgy0ni3p.css';
import '../../css/n/neleddb0h.css';
import '../../css/p/p3hwfgb4i.css';
import '../../css/d/died6zbtp.css';
import '../../css/j/j0opeyb7i.css';
import '../../css/v/v0eyaibau.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="eblnupbhs wm-shadow"/><path class="jdgy0ni3p"/><path class="neleddb0h"/><path class="p3hwfgb4i"/><path class="died6zbtp"/><path class="j0opeyb7i"/><path class="v0eyaibau wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:map-pin-off"} {...others} />);
}

export default Component;
