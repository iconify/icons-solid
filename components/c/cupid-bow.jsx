import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/t/t1r_g8bwx.css';
import '../../css/h/h6_1hfvax.css';
import '../../css/y/yestyib-n.css';
import '../../css/f/frqebvb6u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="t1r_g8bwx"/><path class="h6_1hfvax wm-k"/><path class="wm-a yestyib-n"/><path class="frqebvb6u wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:cupid-bow"} {...others} />);
}

export default Component;
