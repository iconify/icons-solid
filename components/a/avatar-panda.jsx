import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/x/xq411rb6x.css';
import '../../css/g/gubk4aczs.css';
import '../../css/x/xf9llu04j.css';
import '../../css/g/g6fuefeni.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="wm-shadow xq411rb6x"/><path class="gubk4aczs wm-shadow"/><path class="xf9llu04j"/><path class="g6fuefeni"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:avatar-panda"} {...others} />);
}

export default Component;
