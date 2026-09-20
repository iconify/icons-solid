import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f1j07bdah.css';
import '../../css/g/gx5-p-h4b.css';
import '../../css/s/skmz1bcba.css';
import '../../css/r/rqprhiboi.css';
import '../../css/e/e9zxpcbcm.css';

const viewBox = {"width":42,"height":42,"left":-0.5};
const content = `<g class="ft5dv1b6b"><path class="f1j07bdah"/><path class="gx5-p-h4b"/><path class="skmz1bcba"/><path class="rqprhiboi"/><path class="e9zxpcbcm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-stickies-color:face-id-1"} {...others} />);
}

export default Component;
