import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xtpeb-edw.css';
import '../../css/n/nw_rvkbdl.css';
import '../../css/q/qx74xwb3m.css';
import '../../css/t/t0nv5pbsx.css';
import '../../css/m/m0-28cbmp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xtpeb-edw"><path class="nw_rvkbdl"/><path class="qx74xwb3m"/></g><path class="t0nv5pbsx"/><path class="m0-28cbmp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:unlink-bold-duotone"} {...others} />);
}

export default Component;
