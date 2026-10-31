import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/z/z1j7k2dhf.css';
import '../../css/g/grtmxk3xp.css';
import '../../css/i/iv2qj2avp.css';
import '../../css/r/rwuh-cftt.css';
import '../../css/j/j-bisdbrb.css';
import '../../css/j/jr1vpxb_x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="wm-shadow z1j7k2dhf"/><path class="grtmxk3xp"/><path class="iv2qj2avp"/><path class="rwuh-cftt"/><path class="j-bisdbrb"/><path class="jr1vpxb_x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:angry"} {...others} />);
}

export default Component;
