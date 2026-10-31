import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/y/y5h8blb4e.css';
import '../../css/x/xiom6ep4o.css';
import '../../css/m/m773ejb9r.css';
import '../../css/n/n82oocbte.css';
import '../../css/u/ui32hib9b.css';
import '../../css/c/cilqu4buy.css';
import '../../css/u/uayma8b1n.css';
import '../../css/x/xublziezc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="y5h8blb4e"/><path class="xiom6ep4o"/><path class="m773ejb9r wm-shine"/><path class="n82oocbte wm-k"/><path class="ui32hib9b wm-a"/><path class="cilqu4buy"/><path class="uayma8b1n"/><path class="wm-shine xublziezc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:crown"} {...others} />);
}

export default Component;
