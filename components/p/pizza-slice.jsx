import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/m/mqc4xwbty.css';
import '../../css/o/olgf42hdg.css';
import '../../css/r/r_urdhbzw.css';
import '../../css/v/vwzwhubnx.css';
import '../../css/r/r-62znbuy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="mqc4xwbty"/><path class="olgf42hdg"/><path class="r_urdhbzw"/><path class="vwzwhubnx"/><path class="r-62znbuy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:pizza-slice"} {...others} />);
}

export default Component;
