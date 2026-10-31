import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/z/z1j7k2dhf.css';
import '../../css/g/gm4w5e9xe.css';
import '../../css/t/t-we2uxkf.css';
import '../../css/s/sc4s3tbcz.css';
import '../../css/c/cmyf16awz.css';
import '../../css/z/zhtydub7n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="wm-shadow z1j7k2dhf"/><path class="gm4w5e9xe"/><path class="t-we2uxkf"/><path class="sc4s3tbcz"/><path class="cmyf16awz"/><path class="zhtydub7n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:meh"} {...others} />);
}

export default Component;
