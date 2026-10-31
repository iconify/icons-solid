import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/w/wl5y62ijp.css';
import '../../css/o/ok07u-gdb.css';
import '../../css/v/vfirlyapl.css';
import '../../css/r/r1aest9fz.css';
import '../../css/s/sukohubkj.css';
import '../../css/v/v3bzhxbbh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="wl5y62ijp"/><path class="ok07u-gdb"/><path class="vfirlyapl wm-shine"/><path class="r1aest9fz wm-k"/><path class="sukohubkj wm-a"/><path class="v3bzhxbbh wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:chart-bar"} {...others} />);
}

export default Component;
