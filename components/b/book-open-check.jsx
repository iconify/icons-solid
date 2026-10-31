import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/m/mepp-objt.css';
import '../../css/z/zky6z_1dg.css';
import '../../css/q/qa71mivyu.css';
import '../../css/z/z_02kkxdd.css';
import '../../css/v/vwv8bdc5w.css';
import '../../css/j/jek6slb-o.css';
import '../../css/p/p20s48bct.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="mepp-objt"/><path class="zky6z_1dg"/><path class="qa71mivyu wm-shine"/><path class="wm-k z_02kkxdd"/><path class="vwv8bdc5w wm-a"/><path class="jek6slb-o"/><path class="p20s48bct"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:book-open-check"} {...others} />);
}

export default Component;
