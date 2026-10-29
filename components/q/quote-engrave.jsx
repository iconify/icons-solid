import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/d/d4vy9ccks.css';
import '../../css/m/mijyx3brl.css';
import '../../css/n/nbiavb01t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="d4vy9ccks"/><path class="mijyx3brl wm-shadow"/><path class="nbiavb01t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:quote-engrave"} {...others} />);
}

export default Component;
