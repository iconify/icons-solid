import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/n/nr6mnkb0e.css';
import '../../css/a/a33-gdf4r.css';
import '../../css/d/d7t-hcbal.css';
import '../../css/i/i1e90dbbq.css';
import '../../css/h/hm_5qtlkn.css';
import '../../css/i/i92gaqopi.css';
import '../../css/s/sy4bulb0e.css';
import '../../css/u/uddxsf_7d.css';
import '../../css/q/qgnlv1bys.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="nr6mnkb0e"/><path class="a33-gdf4r"/><path class="d7t-hcbal"/><path class="i1e90dbbq"/><path class="hm_5qtlkn"/><path class="i92gaqopi"/><path class="sy4bulb0e"/><path class="uddxsf_7d"/><path class="qgnlv1bys"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:cpu"} {...others} />);
}

export default Component;
