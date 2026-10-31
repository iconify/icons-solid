import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/o/o4-dsi85k.css';
import '../../css/k/k_uhtkbdq.css';
import '../../css/l/lqjvgub6i.css';
import '../../css/y/yw4fz_b6b.css';
import '../../css/h/h_6esdbbu.css';
import '../../css/p/pbhqpdeuw.css';
import '../../css/a/ac8cquwkm.css';
import '../../css/z/zg2mxradb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="o4-dsi85k"/><path class="k_uhtkbdq"/><path class="lqjvgub6i wm-shine"/><path class="wm-k yw4fz_b6b"/><path class="h_6esdbbu wm-a"/><path class="pbhqpdeuw"/><path class="ac8cquwkm"/><path class="wm-shine zg2mxradb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:wink"} {...others} />);
}

export default Component;
