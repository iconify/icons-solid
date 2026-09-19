import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/l/ljs4g1bgp.css';
import '../../css/w/wv-yv2b8x.css';
import '../../css/g/gfta5b4df.css';
import '../../css/k/k9hb0cbdq.css';
import '../../css/x/x5cbwcbqf.css';
import '../../css/c/cu5-adcih.css';
import '../../css/t/ta4v1ob2z.css';
import '../../css/v/vlzsdt6jq.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="ljs4g1bgp"/><path class="wv-yv2b8x"/><path class="gfta5b4df"/><path class="k9hb0cbdq"/><path class="x5cbwcbqf"/><path class="cu5-adcih"/><path class="ta4v1ob2z"/><path class="vlzsdt6jq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:camp"} {...others} />);
}

export default Component;
