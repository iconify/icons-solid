import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/p/plq3ytd1t.css';
import '../../css/d/dr-cx4b-t.css';
import '../../css/i/imxon7blq.css';
import '../../css/c/cw33zfbku.css';
import '../../css/m/mh0dx6lba.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="plq3ytd1t wm-shadow"/><path class="dr-cx4b-t"/><path class="imxon7blq"/><path class="cw33zfbku"/><path class="mh0dx6lba"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:zap"} {...others} />);
}

export default Component;
