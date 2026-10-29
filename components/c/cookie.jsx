import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/q/q0uqq3gah.css';
import '../../css/d/dsiyqkbsa.css';
import '../../css/v/voxtu4bxc.css';
import '../../css/t/t0zac0uir.css';
import '../../css/a/ar5en8-zr.css';
import '../../css/u/ug799plhe.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="q0uqq3gah wm-shadow"/><path class="dsiyqkbsa"/><path class="voxtu4bxc"/><path class="t0zac0uir"/><path class="ar5en8-zr wm-shine"/><path class="ug799plhe wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:cookie"} {...others} />);
}

export default Component;
