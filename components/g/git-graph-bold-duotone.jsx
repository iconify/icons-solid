import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xtpeb-edw.css';
import '../../css/g/gtnoc3_rf.css';
import '../../css/c/cjuj82b2h.css';
import '../../css/x/x5qczv75w.css';
import '../../css/l/lqe642b_v.css';
import '../../css/m/mnelrmb_n.css';
import '../../css/w/wcp-8_b0l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xtpeb-edw"><path class="gtnoc3_rf"/><path class="cjuj82b2h"/><path class="x5qczv75w"/></g><path clip-rule="evenodd" class="lqe642b_v"/><path clip-rule="evenodd" class="mnelrmb_n"/><path clip-rule="evenodd" class="wcp-8_b0l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:git-graph-bold-duotone"} {...others} />);
}

export default Component;
