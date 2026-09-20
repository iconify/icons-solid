import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mnimq3bho.css';
import '../../css/b/b-hewebxq.css';
import '../../css/d/db0m60bnl.css';
import '../../css/g/gu81lybdb.css';
import '../../css/x/xaic8abdg.css';
import '../../css/u/u3g4xbb5g.css';
import '../../css/w/wchmy0bdc.css';
import '../../css/b/bg88l_b_o.css';
import '../../css/j/j-bom_tqh.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="mnimq3bho"/><path class="b-hewebxq"/><path class="db0m60bnl"/><path class="gu81lybdb"/><path class="xaic8abdg"/><circle class="u3g4xbb5g"/><path class="wchmy0bdc"/><path class="bg88l_b_o"/><circle class="j-bom_tqh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:go2rtc"} {...others} />);
}

export default Component;
