import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/i/i_mj4ebji.css';
import '../../css/k/kvwkezwtg.css';
import '../../css/e/e6pe76bxh.css';
import '../../css/y/yw4fz_b6b.css';
import '../../css/r/r4m5x7bba.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="i_mj4ebji"/><path class="kvwkezwtg"/><path class="e6pe76bxh wm-shine"/><path class="wm-k yw4fz_b6b"/><path class="r4m5x7bba wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:ban"} {...others} />);
}

export default Component;
