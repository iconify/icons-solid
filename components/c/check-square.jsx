import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/j/jh-d33clr.css';
import '../../css/i/ibtq3f5qv.css';
import '../../css/p/pixp96bko.css';
import '../../css/b/bcey50bak.css';
import '../../css/u/usaqtc2si.css';
import '../../css/n/nom4uic1z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="jh-d33clr wm-shadow"/><path class="ibtq3f5qv"/><path class="pixp96bko"/><path class="bcey50bak"/><path class="usaqtc2si"/><path class="nom4uic1z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:check-square"} {...others} />);
}

export default Component;
