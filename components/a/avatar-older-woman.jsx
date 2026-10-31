import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/w/wu3987b4s.css';
import '../../css/c/cd7p2b0nz.css';
import '../../css/d/dwpya1bvo.css';
import '../../css/j/j_so4-nax.css';
import '../../css/s/s8z1hogeo.css';
import '../../css/n/na6h9lbzu.css';
import '../../css/g/geasnnbte.css';
import '../../css/m/m9emfo10m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="wm-shadow wu3987b4s"/><path class="cd7p2b0nz"/><path class="dwpya1bvo"/><path class="j_so4-nax"/><path class="s8z1hogeo"/><path class="na6h9lbzu"/><path class="geasnnbte"/><path class="m9emfo10m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:avatar-older-woman"} {...others} />);
}

export default Component;
