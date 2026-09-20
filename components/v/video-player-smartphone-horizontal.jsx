import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qtwm5wf_a.css';
import '../../css/a/aw-rszlkj.css';
import '../../css/j/j4r_gubgn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="qtwm5wf_a"/><path class="aw-rszlkj"/><path class="j4r_gubgn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:video-player-smartphone-horizontal"} {...others} />);
}

export default Component;
