import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/s/sj404-ble.css';
import '../../css/y/yd-sci8gn.css';
import '../../css/z/zll8l-bne.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="sj404-ble wm-k"/><path class="wm-a yd-sci8gn"/><path class="wm-s zll8l-bne"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:users-plus"} {...others} />);
}

export default Component;
