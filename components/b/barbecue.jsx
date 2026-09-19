import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vm3ivccum.css';
import '../../css/v/vluhuimtv.css';
import '../../css/w/w7m--yb-u.css';
import '../../css/y/y_gwdpbzr.css';
import '../../css/s/s3qwumb8c.css';
import '../../css/j/j_y7ttb_x.css';
import '../../css/j/jq-1spbwd.css';
import '../../css/z/zcnoikvbi.css';
import '../../css/h/hrsylwbrt.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="vm3ivccum"><rect class="vluhuimtv"/><rect class="w7m--yb-u"/><path class="y_gwdpbzr"/><rect class="s3qwumb8c"/><rect class="j_y7ttb_x"/><path class="jq-1spbwd"/><path class="zcnoikvbi"/><path class="hrsylwbrt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:barbecue"} {...others} />);
}

export default Component;
