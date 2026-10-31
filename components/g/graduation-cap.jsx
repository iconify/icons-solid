import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/m/mfo7arfry.css';
import '../../css/c/cm1t_mbbd.css';
import '../../css/a/ahw7u-fri.css';
import '../../css/h/hupo_1bwk.css';
import '../../css/n/n1krc-bja.css';
import '../../css/a/ayhca7b6e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="mfo7arfry wm-shadow"/><path class="cm1t_mbbd"/><path class="ahw7u-fri"/><path class="hupo_1bwk"/><path class="n1krc-bja"/><path class="ayhca7b6e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:graduation-cap"} {...others} />);
}

export default Component;
