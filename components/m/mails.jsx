import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r7wm-0b9m.css';
import '../../css/u/u0l5sxrdm.css';
import '../../css/s/ssytqac4a.css';
import '../../css/y/yn3jxy_fn.css';
import '../../css/b/bkbhabbfd.css';
import '../../css/s/sl4o_mbqu.css';
import '../../css/q/q02avtb3a.css';
import '../../css/g/grwkmzbcf.css';
import '../../css/t/t-1ckjb8n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="r7wm-0b9m wm-a"/><path class="u0l5sxrdm wm-a"/><path class="ssytqac4a wm-a"/><path class="wm-k yn3jxy_fn"/><path class="bkbhabbfd wm-k"/><path class="sl4o_mbqu wm-k"/><path class="q02avtb3a wm-k"/><path class="grwkmzbcf wm-shine"/><path class="t-1ckjb8n wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:mails"} {...others} />);
}

export default Component;
