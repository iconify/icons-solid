import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/m/m38_0qbnh.css';
import '../../css/a/aszzpubda.css';
import '../../css/w/wkao2cchc.css';
import '../../css/j/js_069bdg.css';
import '../../css/t/toxz99mob.css';
import '../../css/o/o1b0ulbii.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="m38_0qbnh wm-shadow"/><path class="aszzpubda"/><path class="wkao2cchc"/><path class="js_069bdg"/><path class="toxz99mob"/><path class="o1b0ulbii"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:weight"} {...others} />);
}

export default Component;
