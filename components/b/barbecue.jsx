import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vm3ivccum.css';
import '../../css/y/yrcgiofka.css';
import '../../css/n/nsqypyrpq.css';
import '../../css/y/y_gwdpbzr.css';
import '../../css/o/or2yte5sg.css';
import '../../css/w/wmasrfbrz.css';
import '../../css/j/jq-1spbwd.css';
import '../../css/z/zcnoikvbi.css';
import '../../css/h/hrsylwbrt.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="vm3ivccum"><rect class="yrcgiofka"/><rect class="nsqypyrpq"/><path class="y_gwdpbzr"/><rect class="or2yte5sg"/><rect class="wmasrfbrz"/><path class="jq-1spbwd"/><path class="zcnoikvbi"/><path class="hrsylwbrt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:barbecue"} {...others} />);
}

export default Component;
