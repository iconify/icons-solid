import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/s/sxdgd-ahl.css';
import '../../css/z/zexbz509t.css';
import '../../css/a/ali3yym2p.css';
import '../../css/h/h8f0cde5s.css';
import '../../css/z/zt0yzob2o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="sxdgd-ahl wm-shadow"/><path class="zexbz509t"/><path class="ali3yym2p"/><path class="h8f0cde5s"/><path class="zt0yzob2o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:lamp-desk"} {...others} />);
}

export default Component;
