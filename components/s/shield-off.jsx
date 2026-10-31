import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/y/ywpv4zbpx.css';
import '../../css/q/qlh0vdb1v.css';
import '../../css/r/rjw6m4kko.css';
import '../../css/x/xynczcb7g.css';
import '../../css/u/uwycddcxh.css';
import '../../css/x/x24ag5bvt.css';
import '../../css/v/v0eyaibau.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="wm-shadow ywpv4zbpx"/><path class="qlh0vdb1v"/><path class="rjw6m4kko"/><path class="xynczcb7g"/><path class="uwycddcxh"/><path class="x24ag5bvt"/><path class="v0eyaibau wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:shield-off"} {...others} />);
}

export default Component;
