import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/g/g0y7-mbjg.css';
import '../../css/g/ga_o8ubhy.css';
import '../../css/w/wo89xnbgv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="g0y7-mbjg wm-k"/><path class="ga_o8ubhy wm-a"/><path class="wm-deco wo89xnbgv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:corner-up-left"} {...others} />);
}

export default Component;
