import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/q/qtrj12bbp.css';
import '../../css/v/vfz_nxblo.css';
import '../../css/h/hm8-ztbmo.css';
import '../../css/d/d6p7-854g.css';
import '../../css/b/bxdygyzui.css';
import '../../css/z/zd61ekped.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="qtrj12bbp"/><path class="vfz_nxblo"/><path class="hm8-ztbmo"/><path class="d6p7-854g"/><path class="bxdygyzui"/><path class="zd61ekped"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:comb"} {...others} />);
}

export default Component;
