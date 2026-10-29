import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/x/xs98siuyd.css';
import '../../css/v/vsjtogmkk.css';
import '../../css/v/vze4wuf6n.css';
import '../../css/k/kgiyicvgm.css';
import '../../css/y/ypxqvw3_y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="wm-deco xs98siuyd"/><path class="vsjtogmkk wm-deco"/><path class="vze4wuf6n wm-deco"/><path class="kgiyicvgm wm-k"/><path class="wm-a ypxqvw3_y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:git-pull-request-draft-blueprint"} {...others} />);
}

export default Component;
