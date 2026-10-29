import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/m/msq31bcno.css';
import '../../css/z/zdgcjvxqz.css';
import '../../css/d/dto6yifku.css';
import '../../css/e/ebfe2acus.css';
import '../../css/d/d2ecqac4y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="msq31bcno wm-k"/><path class="wm-a zdgcjvxqz"/><path class="dto6yifku wm-shadow"/><path class="ebfe2acus wm-k"/><path class="d2ecqac4y wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:arrow-up-engrave"} {...others} />);
}

export default Component;
