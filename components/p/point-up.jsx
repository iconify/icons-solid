import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/l/lma1j-bkv.css';
import '../../css/w/wlqhkwbzb.css';
import '../../css/m/mc9a0ov5s.css';
import '../../css/y/yte00hbxs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="lma1j-bkv"/><path class="wlqhkwbzb"/><path class="mc9a0ov5s"/><path class="yte00hbxs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:point-up"} {...others} />);
}

export default Component;
