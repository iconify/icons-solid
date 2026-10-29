import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/z/zrc8k0r8f.css';
import '../../css/k/korp5bc4i.css';
import '../../css/t/t8kiw3ynl.css';
import '../../css/z/zvd9xccus.css';
import '../../css/y/yt3gx6m5l.css';
import '../../css/y/y2b9f6bkz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="zrc8k0r8f"/><path class="korp5bc4i wm-a"/><path class="t8kiw3ynl"/><path class="wm-a zvd9xccus"/><path class="yt3gx6m5l"/><path class="wm-a y2b9f6bkz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:avatar-bunny-duo"} {...others} />);
}

export default Component;
