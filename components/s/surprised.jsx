import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/h/hinlq1bgl.css';
import '../../css/q/qioy9849f.css';
import '../../css/k/k_uhtkbdq.css';
import '../../css/l/lqjvgub6i.css';
import '../../css/y/yw4fz_b6b.css';
import '../../css/m/my2h1qeyz.css';
import '../../css/p/pbhqpdeuw.css';
import '../../css/d/dywj8hu8f.css';
import '../../css/z/zg2mxradb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="hinlq1bgl"/><path class="qioy9849f"/><path class="k_uhtkbdq"/><path class="lqjvgub6i wm-shine"/><path class="wm-k yw4fz_b6b"/><path class="my2h1qeyz wm-a"/><path class="pbhqpdeuw"/><path class="dywj8hu8f"/><path class="wm-shine zg2mxradb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:surprised"} {...others} />);
}

export default Component;
