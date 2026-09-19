import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o93lq-byo.css';
import '../../css/r/r_u5pwban.css';
import '../../css/w/w6gmb-bhf.css';
import '../../css/t/te_urob7d.css';
import '../../css/z/zqq4nrk_p.css';
import '../../css/b/b30pl5rlg.css';
import '../../css/q/qxxfjrb2r.css';
import '../../css/u/u8cuag-cq.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="o93lq-byo"><path clip-rule="evenodd" class="r_u5pwban"/><path class="w6gmb-bhf"/><path class="te_urob7d"/><path class="zqq4nrk_p"/><path class="b30pl5rlg"/><path class="qxxfjrb2r"/><path clip-rule="evenodd" class="u8cuag-cq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:heavy-metal"} {...others} />);
}

export default Component;
