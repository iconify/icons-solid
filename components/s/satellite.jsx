import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/z/z6vt-ok-t.css';
import '../../css/v/vftkf4f-a.css';
import '../../css/w/wrs12o3tn.css';
import '../../css/b/b5o2ydj_o.css';
import '../../css/y/ywi9lmb7z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="wm-shadow z6vt-ok-t"/><path class="vftkf4f-a wm-shadow"/><path class="wrs12o3tn"/><path class="b5o2ydj_o"/><path class="wm-s ywi9lmb7z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:satellite"} {...others} />);
}

export default Component;
