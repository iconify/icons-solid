import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/l/l2v0_bt9d.css';
import '../../css/a/ac98f4g0q.css';
import '../../css/j/j16q_yy9f.css';
import '../../css/f/f8wto_btx.css';
import '../../css/d/dkpon-csk.css';
import '../../css/b/b-ol9lbch.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="l2v0_bt9d"/><path class="ac98f4g0q"/><path class="j16q_yy9f"/><path class="f8wto_btx"/><path class="dkpon-csk"/><path class="b-ol9lbch"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:add-four"} {...others} />);
}

export default Component;
