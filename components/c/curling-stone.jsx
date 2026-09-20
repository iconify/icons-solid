import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tfenpmuzt.css';
import '../../css/c/cbr2atosj.css';
import '../../css/w/wvtjm-s0f.css';
import '../../css/o/opy4hcbyz.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/w/wxr3b-z4n.css';
import '../../css/p/pl6bu0b9x.css';
import '../../css/r/rb2rokd-p.css';
import '../../css/g/gi0j5xb8a.css';
import '../../css/g/g54uu_bcn.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="tfenpmuzt"/><path class="cbr2atosj"/><path class="wvtjm-s0f"/><path class="opy4hcbyz"/><g class="jn8qy4bru"><path class="wxr3b-z4n"/><rect class="pl6bu0b9x"/><rect class="rb2rokd-p"/><rect class="gi0j5xb8a"/><path class="g54uu_bcn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:curling-stone"} {...others} />);
}

export default Component;
