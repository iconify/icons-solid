import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/j/jfrx1wh4a.css';
import '../../css/f/fuguhub6s.css';
import '../../css/y/yoez8wa_m.css';
import '../../css/d/dxj5x8bep.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="jfrx1wh4a wm-shadow"/><path class="fuguhub6s wm-shadow"/><path class="yoez8wa_m"/><path class="dxj5x8bep"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:avatar-dog"} {...others} />);
}

export default Component;
