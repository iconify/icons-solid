import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/k/k0b6gb1qe.css';
import '../../css/t/t4z_kdmpn.css';
import '../../css/x/x32xbd0hz.css';
import '../../css/q/q5gnyp2sd.css';
import '../../css/b/b83hx2bbd.css';
import '../../css/u/uqhmd6bht.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="k0b6gb1qe wm-deco"/><path class="t4z_kdmpn wm-deco"/><path class="wm-k x32xbd0hz"/><path class="q5gnyp2sd wm-a"/><path class="b83hx2bbd wm-s"/><path class="uqhmd6bht wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:microphone-off-blueprint"} {...others} />);
}

export default Component;
