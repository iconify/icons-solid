import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/b/bsei3dbqt.css';
import '../../css/s/sczjsxfuk.css';
import '../../css/k/ky1d6yzjf.css';
import '../../css/i/itnabdtio.css';
import '../../css/t/tq-3jub4d.css';
import '../../css/p/pos0v0bhk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="bsei3dbqt wm-shadow"/><path class="sczjsxfuk"/><path class="ky1d6yzjf"/><path class="itnabdtio"/><path class="tq-3jub4d"/><path class="pos0v0bhk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:server"} {...others} />);
}

export default Component;
