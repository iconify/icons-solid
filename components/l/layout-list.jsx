import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/k/kdem0zbaa.css';
import '../../css/i/im4regb9x.css';
import '../../css/t/t9g5kvbye.css';
import '../../css/t/trdla8jeo.css';
import '../../css/m/mrkqmab9s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="kdem0zbaa"/><path class="im4regb9x wm-shine"/><path class="t9g5kvbye wm-k"/><path class="trdla8jeo wm-a"/><path class="mrkqmab9s wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:layout-list"} {...others} />);
}

export default Component;
