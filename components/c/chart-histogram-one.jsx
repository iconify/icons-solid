import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/g/g_12-kblq.css';
import '../../css/u/uumk3cclk.css';
import '../../css/r/r5xryvj2q.css';
import '../../css/r/ro2e2lb5q.css';
import '../../css/t/to2v25exy.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="g_12-kblq"/><path class="uumk3cclk"/><path class="r5xryvj2q"/><path class="ro2e2lb5q"/><path class="to2v25exy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:chart-histogram-one"} {...others} />);
}

export default Component;
