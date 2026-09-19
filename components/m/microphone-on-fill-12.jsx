import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/ftvnhccxn.css';
import '../../css/d/dqor2ik2p.css';
import '../../css/t/tydacswje.css';

const viewBox = {"width":12,"height":12};
const content = `<g class="cuyn6tgcc"><path class="ftvnhccxn"/><rect class="dqor2ik2p"/></g><path class="tydacswje"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:microphone-on-fill-12"} {...others} />);
}

export default Component;
