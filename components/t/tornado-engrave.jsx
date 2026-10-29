import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/m/mtnf7jb6m.css';
import '../../css/z/zue4gj4kf.css';
import '../../css/f/fvb1lyf-c.css';
import '../../css/p/px2fxif7e.css';
import '../../css/b/bfe3j1boz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="mtnf7jb6m wm-k"/><path class="wm-a zue4gj4kf"/><path class="fvb1lyf-c wm-shadow"/><path class="px2fxif7e wm-k"/><path class="bfe3j1boz wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:tornado-engrave"} {...others} />);
}

export default Component;
